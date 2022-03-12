import { AiOutlineSearch } from 'react-icons/ai'
import './SearchBar.css'
export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Enter user’s name...." />
            <button><AiOutlineSearch className="search-btn" /></button>
        </div>

    )
}