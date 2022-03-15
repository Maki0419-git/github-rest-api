// package
import { useState, cloneElement, useEffect, useRef } from 'react'
import { AiFillWarning } from 'react-icons/ai'
//css
import './Alert.css'


const Alert = ({ open, message, action, actionIcon }) => {
    const [animation, setAnimation] = useState("show");
    const actionRender = useRef(0);
    const closeAction = () => {
        setAnimation("close");
        setTimeout(() => {
            action()
            setAnimation("show");
        }, 1500);
    }

    useEffect(() => actionRender.current += 1)


    return (
        <>
            {open &&
                <div className={`alert ${animation}`}>
                    <AiFillWarning className="title-icon" />
                    <span>{message}</span>
                    {console.log('alert:' + actionRender.current)}
                    {cloneElement(actionIcon, { className: "action-icon", onClick: () => closeAction() })}
                </div>
            }
        </>

    )
}

export default Alert
