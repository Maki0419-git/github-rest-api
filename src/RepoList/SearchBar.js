import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar() {
    return (
        // <div className="search-bar">
        <>
            <input type="text" placeholder="Enter user’s name...." />
            <button><AiOutlineSearch fontSize={20} /></button>
        </>
    )
}