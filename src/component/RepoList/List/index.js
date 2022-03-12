//package
import { useState, useCallback, useRef, useEffect } from 'react'
import moment from 'moment';

// custom hook
import useUserRepoAPI from '../../../customhook/useUserRepoAPI';

//component
import NoData from "../../../assets/img/no-data.png"

//react icons
import { AiFillStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdArrowForwardIos } from 'react-icons/md'
//css
import './List.css';


export default function List({ query, setQuery }) {
    const render = useRef(0);
    const observer = useRef(null);
    const { loading, error, hasMore, repositories, } = useUserRepoAPI({ query });
    console.log(`List Loading ${loading}`)
    const refCallback = useCallback((node) => {
        // console.log(loading);
        if (!node || !hasMore || loading) return;
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver((entries) => {
            console.log(entries);
            // entries 能拿到所有目標元素進出(intersect)變化的資訊
            entries.forEach((entry) => {
                // 取得每個 entry 資訊做一些處理或工作
                if (entry.isIntersecting) {
                    console.log("enter")
                    observer.current.unobserve(entry.target);
                    setQuery(prev => ({ ...prev, page: prev.page + 1 }))
                }
            });
        }, { threshold: 1 });
        observer.current.observe(node);
    }, [loading])
    useEffect(() => { render.current += 1; })
    return (
        <>
            {/* card */}
            <div className="wrapper wrapper-card" >
                {repositories.map((repo, index) => {
                    return (
                        <div className="card" key={index} ref={index + 1 === repositories.length ? refCallback : null}>
                            <div className="first">
                                {/* star icon */}
                                <AiFillStar color="#FFE177" className="star-icon" size={30} />
                                {/* repo name */}
                                <h2>{repo.name}</h2>
                            </div>
                            <div className="second">
                                {/* star count */}
                                <span>{repo.stargazers_count}</span>
                                {/* language and update time */}
                                <div className="detail">
                                    {repo.language && <span className="language">{repo.language}</span>}
                                    <span className="time">Upadte At : {moment(repo.updated_at).startOf("seconds").fromNow()}</span>
                                </div>
                            </div>
                            {/* dot */}
                            <div className="dot">
                                <BsThreeDotsVertical />
                            </div>
                            {/* arrow */}
                            <div className="arrow">
                                <MdArrowForwardIos />
                            </div>
                        </div>
                    )

                })}
                {/* skeleton */}
                {loading && new Array(6).fill(0).map((item, index) => <Skeleton key={index} />)}
            </div>
            {/* no data img */}
            {!loading && !repositories.length && <img src={NoData} align="center" className="no-data" />}
        </>

    )
}


const Skeleton = () => (
    <div className="card list-skeleton">
        <div className="arrow skeleton "></div>
        <div className="dot skeleton "></div>
        <div className=" skeleton desc"></div>
        <div className=" skeleton desc"></div>
    </div>
)


