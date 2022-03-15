//package
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useState, } from 'react'
import { AiFillWarning } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'
//components
import Alert from '../../Common/Alert/Alert';
//css
import './SearchBar.css'

export default function SearchBar() {
    const [username, setUserName] = useState("")
    const [alert, setAlert] = useState(false);
    let navigate = useNavigate();
    const handleSubmit = () => {
        if (username === "") {
            setAlert(true);
            return
        }
        navigate(`/users/${username}/repos`);
    }
    return (
        <>
            <div className="search-wrapper">
                <input type="text" placeholder="Enter user’s name...."
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyPress={e => { if (e.code === "Enter") handleSubmit() }}
                />
                <button onClick={() => handleSubmit()}>
                    <AiOutlineSearch className="search-btn" />
                </button>
            </div>
            <Alert
                open={alert}
                messageIcon={<AiFillWarning />} message={"Warning : please enter username !"}
                actionIcon={<TiDelete />} action={() => setAlert(false)}
            />

        </>

    )
}