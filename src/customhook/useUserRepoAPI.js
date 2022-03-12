import React from 'react'
import { useEffect, useState, useCallback, useRef } from 'react'
export default function useUserRepoAPI({ query }) {

    const [status, setStatus] = useState({
        loading: true,
        error: false,
        hasMore: true
    })
    const [repositories, setRepositories] = useState([]);
    const readDataCount = useRef(0);
    const queryResult = () => {
        let results = "";
        Object.keys(query).forEach(key => results += `&${key}=${query[key]}`);
        console.log(results);
        return results;
    }
    const timer = (repositories, data) => setTimeout(() => {
        setStatus(prev => ({ ...prev, loading: false, hasMore: data.length > 0 }))
        setRepositories(prev => [...prev, ...repositories]);
    }, 1000)
    const getRepo = useCallback(async () => {
        console.log("callback")
        setStatus(prev => ({ ...prev, loading: true }))
        try {
            const res = await fetch(`https://api.github.com/users/john-smilga/repos?per_page=10${queryResult()}`, {
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
            setStatus(prev => ({ ...prev, error }))
        }
    }, [query])




    //read repo data
    useEffect(() => {
        console.log("read data")
        readDataCount.current += 1
        console.log("page: " + query.page);
        // console.log(readDataCount.current)
        if (query.page === 1) setRepositories([]);
        getRepo();
        return () => clearTimeout(timer)
    }, [query])



    return { ...status, repositories, };
}
