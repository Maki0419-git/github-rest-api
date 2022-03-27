//package
import { useEffect, useState, useCallback, useRef } from 'react'
import axios from "axios";
//js
import handleAPIError from '../error/handleAPIError';

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
        errorMessage: "",
        hasMore: true
    })
    const [repositories, setRepositories] = useState([]);
    const render = useRef(0);
    // setting minimum loading time
    let timer;
    const loadingTime = (repositories, data) => {

        timer = setTimeout(() => {
            setStatus(prev => ({ ...prev, loading: false, hasMore: data.length === 10, }))
            setRepositories(prev => [...prev, ...repositories]);
        }, 1000)
    }
    //get API data
    const getRepo = useCallback(async (isMounted) => {
        // console.log("callback")
        if (isMounted) {
            setStatus(prev => ({ ...prev, loading: true, error: false, errorMessage: "" }))
        }
        try {
            const options = {
                method: 'GET',
                url: `https://api.github.com/users/${username}/repos?per_page=10${queryResult(query)}`,
                headers: { Accept: 'application/vnd.github.v3+json' }
            };
            const { data } = await axios.request(options)
            let repositories = data.map((repo, index) => (
                {
                    name: repo.name,
                    stargazers_count: repo.stargazers_count,
                    language: repo.language,
                    updated_at: repo.updated_at,
                    owner: repo.owner.login,
                }
            ))
            if (isMounted) {
                loadingTime(repositories, data);
            }

        } catch (error) {

            handleAPIError(error, setStatus);

        }

    }, [query,])


    // useEffect(() => { render.current += 1; console.log("custom hook render :" + render.current) })

    useEffect(() => {
        let isMounted = true;
        console.log("read data")
        console.log("page: " + query.page);
        if (query.page === 1) setRepositories([]);
        getRepo(isMounted);
        return () => {
            isMounted = false;
            clearTimeout(timer)
        }
    }, [query,])



    return { ...status, repositories, };
}
