//package
import { useEffect, useState, useCallback, useRef } from 'react'
import axios from "axios";
import moment from 'moment';
//js
import handleAPIError from '../error/handleAPIError';


const useRepoInfoAPI = ({ query }) => {
    const [status, setStatus] = useState({
        loading: true,
        error: false,
        errorType: "",
    })
    const [info, setInfo] = useState({
        full_name: "project",
        html_url: "",
        description: "",
        clone_url: "https://github.com/Maki0419-git/cloud-message.git",
        watchers_count: 0,
        stargazers_count: 0,
        default_branch: "master",
        updated_at: moment().startOf("seconds").fromNow(),
        language: "javascript",
        size: 0,
    });
    // setting minimum loading time
    const timer = (value) => setTimeout(() => {
        setStatus(prev => ({ ...prev, loading: false, error: false, errorType: "" }))
        setInfo(value);
    }, 1000)
    const readInfo = useCallback(async () => {
        setStatus(prev => ({ ...prev, loading: true }))
        try {
            const options = { method: 'GET', url: `https://api.github.com/repos/${query.username}/${query.repo}` };
            const { data } = await axios.request(options);
            const { full_name, html_url, description, clone_url, watchers_count,
                stargazers_count, default_branch, updated_at, language, size } = data;
            timer({
                full_name, html_url, description, clone_url, watchers_count,
                stargazers_count, default_branch, updated_at: moment(updated_at).startOf("seconds").fromNow(), language, size
            });
        } catch (error) {
            handleAPIError(error, setStatus);
        }
    }, [query]);

    useEffect(() => {
        readInfo();
    }, [query])

    return { ...status, info }
}


export default useRepoInfoAPI;
