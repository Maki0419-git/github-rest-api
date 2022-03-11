import React from 'react'
import './SortBar.css'
import { RiArrowDownSFill } from 'react-icons/ri'
import { useState, useRef, useEffect } from 'react'

const typeOptions = ["all", "owner", "member"];
const sortOptions = ["created", "updated", "pushed", "full_name"];
const directionOptions = ["asc", "desc"];


const DropDown = ({ options, setQuery, title, query, targetRef }) => {
    const [action, setAction] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (targetRef.current && !targetRef.current.contains(event.target)) {
                setAction(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => { setAction(!action) }}>
                <span>{query[title]}</span>
                <RiArrowDownSFill />
            </div>
            {action &&
                <div className="dropdown-content" >
                    {options.map(item =>
                        <div
                            key={item}
                            className="dropdown-item"
                            style={query[title] === item ? { backgroundColor: "#E9F2C2" } : {}}
                            onClick={() => { setAction(false); setQuery(prev => ({ ...prev, [title]: item })) }}>
                            {item}
                        </div>
                    )}

                </div>
            }

        </div>
    )
}


const SortBar = ({ query, setQuery }) => {

    const targetRef = useRef(null);

    return (
        <div className="sort-bar" ref={targetRef}>
            <DropDown options={typeOptions} title="type" {...{ setQuery, query, targetRef }} />
            <DropDown options={sortOptions} title="sort"{...{ setQuery, query, targetRef }} />
            <DropDown options={directionOptions} title="direction" {...{ setQuery, query, targetRef }} />
        </div>
    )
}

export default SortBar
