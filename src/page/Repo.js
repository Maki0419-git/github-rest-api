// package
import { RiGitRepositoryFill } from 'react-icons/ri'
import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from "react-router-dom";

// components
import Bar from '../component/Common/Bar/Bar';
import Header from '../component/Common/Header/Header';
import Info from '../component/Repo/Info/Info';

//css
import './page.css';

const Repo = () => {
    const { username, repo } = useParams();
    const [query, setQuery] = useState({
        username,
        repo
    })

    useEffect(() => setQuery({ username, repo }), [username, repo])

    return (
        <>
            <Bar title="Repository" goback />
            <div className="container">
                <div className="repo-container">
                    <Header header="Repository Info" headerIcon={<RiGitRepositoryFill />} />
                    <Info query={query} setQuery={setQuery} />
                </div>
            </div>
        </>
    )
}

export default Repo
