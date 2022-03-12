import React from 'react'
import './Alert.css'
import { AiFillWarning } from 'react-icons/ai'
import { BsArrowClockwise } from 'react-icons/bs'

const Alert = ({ retry }) => {
    return (
        <div className="alert show">
            <AiFillWarning className="icon warn" />
            <span>Warning : please check your wifi connection</span>
            <BsArrowClockwise className="icon retry" onClick={() => retry()} />
        </div>
    )
}

export default Alert
