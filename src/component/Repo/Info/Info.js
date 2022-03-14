//package
import { useState, cloneElement } from 'react'
import { AiFillStar, AiOutlineBranches, AiFillEye, AiFillFileZip, AiFillCode, AiOutlineArrowRight, AiTwotoneCopy } from 'react-icons/ai'
import { MdAccessTimeFilled } from 'react-icons/md';
//css
import './Info.css';

//custom hook
import useRepoInfoAPI from '../../../customhook/useRepoInfoAPI';

//components
import Error from '../../Common/Error/Error'


const Details = [
    { title: "watchers_count", icon: <AiFillEye /> },
    { title: "stargazers_count", icon: <AiFillStar /> },
    { title: "default_branch", icon: <AiOutlineBranches /> },
    { title: "updated_at", icon: <MdAccessTimeFilled /> },
    { title: "language", icon: <AiFillCode /> },
    { title: "size", icon: <AiFillFileZip /> }
];



const Info = ({ query, setQuery }) => {
    const { info, loading, error, errorType } = useRepoInfoAPI({ query });

    return (
        <>
            {error && loading ?
                <>
                    <div className="info-container">
                        <Skeleton />
                    </div>
                    {/* error */}
                    {error && <Error errorType={errorType} setQuery={setQuery} />}
                </>
                : error && !loading ? <Error errorType={errorType} setQuery={setQuery} />
                    : !error && loading ? <div className="info-container"> <Skeleton /></div> :
                        <div className="info-container">
                            <div className="info-header">
                                <h2>{info.full_name}</h2>
                                <div onClick={() => window.open(`${info.html_url}`, "_blank")}>
                                    <span>see more</span><AiOutlineArrowRight className="right-arrow" />
                                </div>
                            </div>
                            <div className="info-divider" />
                            <div className="info-wrapper">
                                <div className="info-left-grid">
                                    <div className="info-desc">
                                        <h3>Description</h3>
                                        <p >
                                            {info.description ? info.description : "No description for this repository"}
                                        </p>
                                    </div>
                                    <div className="info-clone-url">
                                        <h3>Clone URL</h3>
                                        <div>
                                            <p>
                                                {info.clone_url}
                                            </p>
                                            <AiTwotoneCopy className="clip-board" onClick={() => navigator.clipboard.writeText(info.clone_url)} />
                                        </div>

                                    </div>
                                </div>
                                <div className="info-detail">
                                    <h3>Details</h3>
                                    <div className="info-detail-wrapper">
                                        {Details.map((item, index) => <div key={index}>{cloneElement(item.icon, { className: "icon" })}<span>{info[item.title]}</span></div>)}
                                    </div>
                                </div>
                            </div></div>}

        </>
    )
}


const Skeleton = () => {
    return (
        <>
            <div className="skeleton-header">
                <div className="skeleton" />
            </div>
            <div className="info-wrapper ">
                <div className="info-left-grid">
                    <div className="skeleton skeleton-box1"></div>
                    <div className="skeleton skeleton-box1" ></div>
                </div>
                <div className="info-detail skeleton skeleton-box2" />
            </div>
        </>
    )
}

export default Info
