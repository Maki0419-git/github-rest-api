//package
import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md"
//img
import Dcard from "../../../assets/img/dcard.png"
//css
import './Bar.css'



const Bar = ({ title, goback }) => {
    const navigate = useNavigate();
    return (
        <div className="bar">
            {goback && <MdOutlineArrowBackIosNew className="arrow-icon" onClick={() => navigate(-1)} />}
            <h2>{title}</h2>
        </div>
    )
}

export default Bar;
