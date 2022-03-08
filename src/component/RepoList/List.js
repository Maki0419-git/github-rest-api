import { AiFillStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdArrowForwardIos } from 'react-icons/md'
import moment from 'moment';

export default function List({ repositories, lastRepoRef, loading }) {
    return (
        <>
            {repositories.map((repo, index) => {
                return (
                    <>
                        <div className="card" key={repo.name}>
                            <div >
                                <div className="title">
                                    <AiFillStar color="#FFE177" fontSize={30} />
                                </div>
                                <div className="info">
                                    <h2>{repo.name}</h2>
                                </div>
                            </div>
                            <div >
                                <div className="title">
                                    <span>{repo.stargazers_count}</span>
                                </div>
                                <div className="info">
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
                        {repositories.length === index + 1 ? <div className="loading" ref={lastRepoRef}>{loading && 'Loading'}</div> : ""}
                    </>
                )
                // repositories.length === index + 1 ? <div className="loading" ref={lastRepoRef}>{loading && 'Loading'}</div> : ""
            })}

        </>
    )
}