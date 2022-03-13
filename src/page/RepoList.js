
import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { BsGithub } from 'react-icons/bs'

//css
import './style.css'
//components
import Header from '../component/Common/Header';
import Bar from '../component/Common/Bar';
import List from '../component/RepoList/List';
import SortBar from '../component/RepoList/SortBar';


export default function RepoList() {
    const [query, setQuery] = useState({
        type: "owner",
        sort: "full_name",
        direction: "asc",
        page: 1
    })
    const { username } = useParams();

    return (
        <>
            <Bar title="Repository List" goback />
            <div className="container">

                <div className="list-container">
                    <div className="wrapper wrapper-header">
                        <Header header={`${username}'s Repositories`} headerIcon={<BsGithub />} />
                        <SortBar  {...{ query, setQuery }} />
                    </div>

                    <List {...{ query, setQuery, username }} />
                </div>
            </div>
        </>


    )
}