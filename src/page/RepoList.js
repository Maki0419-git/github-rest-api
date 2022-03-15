//package
import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { BsGithub } from 'react-icons/bs'

//components
import Header from '../component/Common/Header/Header';
import Bar from '../component/Common/Bar/Bar';
import List from '../component/RepoList/List/List';
import SortBar from '../component/RepoList/SortBar/SortBar';

//css
import './page.css'

//setting initial query
let initialQuery = {
    type: "owner",
    sort: "full_name",
    direction: "asc",
    page: 1
}

//generating initial state
const setLocalStorageToState = () => {
    let APIQuery = localStorage.getItem('APIQuery');
    if (!APIQuery) {
        localStorage.setItem('APIQuery', JSON.stringify(initialQuery))
        return initialQuery
    } else {
        return JSON.parse(APIQuery)
    }
}

export default function RepoList() {
    const [query, setQuery] = useState(setLocalStorageToState());
    const { username } = useParams();
    return (
        <>
            <Bar title="Repository List" goback />
            <div className="container">
                <div className="list-container">
                    <div className="list-wrapper list-wrapper-header">
                        <Header header={`${username}'s Repositories`} headerIcon={<BsGithub />} />
                        <SortBar  {...{ query, setQuery }} />
                    </div>
                    <List {...{ query, setQuery, username }} />
                </div>
            </div>
        </>


    )
}