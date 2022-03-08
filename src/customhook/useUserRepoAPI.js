import React from 'react'
import { useEffect, useState } from 'react'
export default function useUserRepoAPI({ page }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true)
    const [repositories, setRepositories] = useState([]);
    //read repo data
    useEffect(() => {
        const getRepo = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.github.com/users/Maki0419-git/repos?per_page=10&page=${page}`, {
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
                setRepositories(prev => [...prev, ...repositories]);
                setHasMore(data.length > 0);
                setLoading(false)
            } catch (e) {
                setError(true)
            }
        }
        getRepo();
    }, [page])
    return { loading, error, hasMore, repositories };
}
