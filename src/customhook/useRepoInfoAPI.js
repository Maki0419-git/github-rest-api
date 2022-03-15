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
        errorMessage: "",
    })
    const [info, setInfo] = useState({});
    // setting minimum loading time
    const timer = (value) => setTimeout(() => {
        setStatus(prev => ({ ...prev, loading: false }))
        setInfo(value);
    }, 1000)
    const readInfo = useCallback(async () => {
        setStatus(prev => ({ ...prev, loading: true, error: false, errorMessage: "" }))
        try {
            const options = {
                method: 'GET',
                url: `https://api.github.com/repos/${query.username}/${query.repo}`,
                headers: { Accept: 'application/vnd.github.v3+json' }
            };
            const { data } = await axios.request(options);
            const { full_name, html_url, description, clone_url, watchers_count,
                stargazers_count, default_branch, pushed_at, language, size } = data;
            timer({
                full_name, html_url, description, clone_url, watchers_count,
                stargazers_count, default_branch, pushed_at: moment(pushed_at).startOf("seconds").fromNow(), language, size
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
