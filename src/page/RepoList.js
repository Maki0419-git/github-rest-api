import '../component/RepoList/style.css';
import SearchBar from '../component/RepoList/SearchBar';
import Header from '../component/RepoList/Header';
import List from '../component/RepoList/List';
import useUserRepoAPI from '../customhook/useUserRepoAPI';
import { useEffect, useState, useRef, useCallback } from 'react';

export default function RepoList() {
    const [page, setPage] = useState(1);
    const { loading, error, hasMore, repositories } = useUserRepoAPI({ page });
    const observer = useRef();
    const render = useRef(0);
    console.log('render' + render.current)
    console.log('page' + page);
    console.log('hasMore' + hasMore);
    console.log('loading' + loading);
    const lastRepoRef = useCallback(node => {
        console.log('callback')
        if (loading) return

        observer.current = new IntersectionObserver(entries => {
            console.log(entries[0].target)
            if (entries[0].isIntersecting && hasMore) {
                console.log('visible')
                observer.unobserve(entries[0].target)
                setPage(prev => prev + 1)
            }
        })
        if (node) observer.current.observe(node)
        console.log(node);
    }, [loading, hasMore])
    useEffect(() => render.current += 1)

    return (
        <div className="container">
            <div className="wrapper wrapper-header">
                <SearchBar />
                <Header />
            </div>
            <div className="wrapper wrapper-card" >
                <List repositories={repositories} lastRepoRef={lastRepoRef} loading={loading} />
            </div>

            <div>{error && 'error'}</div>
        </div>
    )
}