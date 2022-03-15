//components
import Alert from '../../Common/Alert/Alert'
//img
import NotFound from "../../../assets/img/not-found.png"
import { BsArrowClockwise } from 'react-icons/bs'
import { BiCommentError } from 'react-icons/bi'
//css
import '../../RepoList/List/List.css';

const Error = ({ error, errorMessage, setQuery }) => {
    return (
        <>
            {errorMessage === "Not Found" ?
                <img src={NotFound} align="center" className="img-alert" /> :
                <Alert
                    open={error}
                    messageIcon={<BiCommentError />} message={`Waring : ${errorMessage}`}
                    actionIcon={<BsArrowClockwise />} action={() => setQuery(prev => ({ ...prev }))}
                />
            }
        </>
    )
}

export default Error
