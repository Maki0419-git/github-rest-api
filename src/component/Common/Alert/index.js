import React from 'react'
import './Alert.css'


// Warning : please check your wifi connection
// { children, Icon }: ButtonProps
const Alert = ({ message, messageIcon, action, actionIcon }) => {
    return (
        <div className="alert show">
            {React.cloneElement(messageIcon, { className: "title-icon" })}
            <span>{message}</span>
            {React.cloneElement(actionIcon, { className: "action-icon", onClick: () => action() })}
        </div>
    )
}

export default Alert
