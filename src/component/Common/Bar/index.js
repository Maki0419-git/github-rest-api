
import React from 'react'
import Dcard from "../../../assets/img/dcard.png"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import './Bar.css'

const HomeBar = () => (
    <div className="bar">
        <img src={Dcard} />
        <h2>2022 Web Frontend Intern Homework</h2>
    </div>
)

const CommonBar = ({ title }) => {
    return (
        <div className="bar">
            <MdOutlineArrowBackIosNew className="arrow-icon" />
            <h2>{title}</h2>
        </div>
    )
}

export { HomeBar, CommonBar } 
