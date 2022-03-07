import './style.css';
import SearchBar from './SearchBar';
import Header from './Header';
export default function RepoList() {
    return (
        <div className="container">
            <div className="bar">
                <div className="half-center search-bar">
                    <SearchBar />
                </div>
                <div className="half-center header">
                    <Header />
                </div>
            </div>
            <div className="repo-list">
                list
            </div>
        </div>
    )
}