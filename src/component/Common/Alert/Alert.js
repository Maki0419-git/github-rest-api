// package
import { useState, cloneElement, useEffect } from 'react'
//css
import './Alert.css'


const Alert = ({ message, messageIcon, action, actionIcon }) => {
    const [animation, setAnimation] = useState("show");
    const closeAction = () => {
        setAnimation("close");
        setTimeout(() => action(), 1500);
    }
    useEffect(() => {
        setAnimation("show");
    }, [action])


    return (
        <div className={`alert ${animation}`}>
            {cloneElement(messageIcon, { className: "title-icon" })}
            <span>{message}</span>
            {console.log('alert')}
            {cloneElement(actionIcon, { className: "action-icon", onClick: () => closeAction() })}
        </div>
    )
}

export default Alert
