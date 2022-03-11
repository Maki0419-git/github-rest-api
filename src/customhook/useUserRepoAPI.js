import React from 'react'
import { useEffect, useState, useCallback, useRef } from 'react'
export default function useUserRepoAPI({ page, query }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true)
    const [repositories, setRepositories] = useState([]);
    const readDataCount = useRef(0);
    const queryResult = () => {
        let results = "";
        Object.keys(query).forEach(key => results += `&${key}=${query[key]}`);
        console.log(results);
        return results;
    }
    const getRepo = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/Maki0419-git/repos?per_page=10&page=${page}${queryResult()}`, {
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
            if (page === 1) {
                setRepositories([...repositories])
            } else {
                setRepositories(prev => [...prev, ...repositories]);
            }

            setHasMore(data.length > 0);
            setLoading(false)
        } catch (e) {
            setError(true)
        }
    }, [page])
    //read repo data
    useEffect(() => {
        console.log("read data")
        readDataCount.current += 1
        console.log(readDataCount.current)
        getRepo();
    }, [page])

    return { loading, error, hasMore, repositories };
}
