
import { useEffect, useState, useRef, useCallback } from 'react';

//css
import './RepoList.css'
//components
import Header from '../component/Common/Header';
import { CommonBar } from '../component/Common/Bar';
import List from '../component/RepoList/List';
import SortBar from '../component/RepoList/SortBar';


export default function RepoList() {
    const [query, setQuery] = useState({
        type: "owner",
        sort: "full_name",
        direction: "asc"
    })
    console.log(query)

    return (
        <>
            <CommonBar title="Repository List" />
            <div className="container">

                <div className="list-container">
                    <div className="wrapper wrapper-header">
                        <Header />
                        <SortBar query={query} setQuery={setQuery} />
                    </div>
                    <div className="wrapper wrapper-card" >
                        <List query={query} />
                    </div>
                </div>
            </div>
        </>


    )
}