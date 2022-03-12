
import { useEffect, useState, useRef, useCallback } from 'react';

//css
import './style.css'
//components
import Header from '../component/Common/Header';
import { CommonBar } from '../component/Common/Bar';
import List from '../component/RepoList/List';
import SortBar from '../component/RepoList/SortBar';


export default function RepoList() {
    const [query, setQuery] = useState({
        type: "owner",
        sort: "full_name",
        direction: "asc",
        page: 1
    })
    // console.log(query)

    return (
        <>
            <CommonBar title="Repository List" />
            <div className="container">

                <div className="list-container">
                    <div className="wrapper wrapper-header">
                        <Header />
                        <SortBar query={query} setQuery={setQuery} />
                    </div>

                    <List query={query} setQuery={setQuery} />
                </div>
            </div>
        </>


    )
}