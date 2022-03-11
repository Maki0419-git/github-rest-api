import { useState, useCallback, useRef, useEffect } from 'react'

// custom hook
import useUserRepoAPI from '../../../customhook/useUserRepoAPI';
//react icons
import { AiFillStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdArrowForwardIos } from 'react-icons/md'
//css
import './style.css';
//package
import moment from 'moment';

export default function List({ query }) {
    const [page, setPage] = useState(1);
    const render = useRef(0);
    const { loading, error, hasMore, repositories } = useUserRepoAPI({ page, query });
    const refCallback = useCallback((node) => {
        if (!node || !hasMore || loading) return;
        const callback = (entries) => {
            // entries 能拿到所有目標元素進出(intersect)變化的資訊
            entries.forEach((entry) => {
                // 取得每個 entry 資訊做一些處理或工作
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    setPage(prev => prev + 1)
                }
            });
        };
        const observer = new IntersectionObserver(callback, { threshold: 1 });
        observer.observe(node);
    }, [loading])
    useEffect(() => { setPage(1) }, [query])
    useEffect(() => { render.current += 1 })
    return (
        <>
            {console.log(render.current)}
            {repositories.map((repo, index) => {
                return (
                    <div className="card" key={index} ref={index + 1 === repositories.length ? refCallback : null}>
                        <div className="first">
                            <AiFillStar color="#FFE177" className="star-icon" size={30} />
                            <h2>{repo.name}</h2>
                        </div>
                        <div className="second">
                            <span>{repo.stargazers_count}</span>
                            <div className="detail">
                                {repo.language && <span className="language">{repo.language}</span>}
                                <span className="time">Upadte At : {moment(repo.updated_at).startOf("seconds").fromNow()}</span>
                            </div>
                        </div>
                        <div className="top-left">
                            <BsThreeDotsVertical />
                        </div>
                        <div className="center-right">
                            <MdArrowForwardIos />
                        </div>
                    </div>
                )

            })}

        </>
    )
}