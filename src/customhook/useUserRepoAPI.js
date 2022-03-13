import React from 'react'
import { useEffect, useState, useCallback, useRef } from 'react'


const queryResult = (query) => {
    let results = "";
    Object.keys(query).forEach(key => results += `&${key}=${query[key]}`);
    console.log(results);
    return results;
}


export default function useUserRepoAPI({ query, username }) {
    const [status, setStatus] = useState({
        loading: true,
        error: false,
        hasMore: true
    })
    const [repositories, setRepositories] = useState([]);
    const render = useRef(0);
    // setting minimum loading time
    const timer = (repositories, data) => setTimeout(() => {
        setStatus(prev => ({ ...prev, loading: false, hasMore: data.length === 10, error: false }))
        setRepositories(prev => [...prev, ...repositories]);
    }, 1000)
    //get API data
    const getRepo = useCallback(async () => {
        // console.log("callback")
        setStatus(prev => ({ ...prev, loading: true }))
        try {
            const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=10${queryResult(query)}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/vnd.github.v3+json"
                }
            })
            const data = await res.json();
            let repositories = data.map((repo, index) => (
                {
                    name: repo.name,
                    stargazers_count: repo.stargazers_count,
                    language: repo.language,
                    updated_at: repo.updated_at
                }
            ))
            timer(repositories, data);
        } catch (error) {
            console.log(error)
            setStatus(prev => ({ ...prev, error: true }))
        }
    }, [query])


    useEffect(() => { render.current += 1; console.log("custom hook render :" + render.current) })

    useEffect(() => {
        console.log("read data")
        console.log("page: " + query.page);
        if (query.page === 1) setRepositories([]);
        getRepo();
        return () => clearTimeout(timer)
    }, [query])



    return { ...status, repositories, };
}
