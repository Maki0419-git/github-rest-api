import React from 'react'
import './Info.css';

import { AiFillStar, AiOutlineBranches, AiFillEye } from 'react-icons/ai'
import { MdAccessTimeFilled } from 'react-icons/md';

const DetailsIcon = [<AiFillEye />, <AiFillStar />, <AiOutlineBranches />, <MdAccessTimeFilled />];

const Info = () => {
    return (
        <div className="info-container">
            <div className="info-header">
                <h2>Maki0419-git/cloud-message</h2>
                <span>see more</span>
            </div>
            <div className="info-divider" />
            <div className="info-wrapper">
                <div className="info-desc">
                    <h3>Description</h3>
                    <p >
                        🚀 Generate GitHub profile README easily with the latest add-ons like visitors count, GitHub stats, etc using minimal UI.
                    </p>
                </div>
                <div className="info-detail">
                    <h3>Details</h3>
                    <div className="info-detail-container">
                        <ul>
                            {DetailsIcon.map((i, index) =>
                                <li key={index}>{React.cloneElement(i, { className: "icon" })}<span>123</span></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
