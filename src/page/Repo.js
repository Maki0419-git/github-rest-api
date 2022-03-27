// package
import { RiGitRepositoryFill } from 'react-icons/ri'
import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useLocation } from "react-router-dom";
import qs from 'qs'

// components
import Bar from '../component/Common/Bar/Bar';
import Header from '../component/Common/Header/Header';
import Info from '../component/Repo/Info/Info';

//css
import './page.css';

const getOwner = (search) => {
    const query = qs.parse(search, { ignoreQueryPrefix: true })
    return query.owner;
}

const Repo = () => {
    const location = useLocation()
    const { repo } = useParams();
    const [query, setQuery] = useState({
        owner: getOwner(location.search),
        repo
    })

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
