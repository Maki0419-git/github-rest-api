//components
import Alert from '../../Common/Alert/Alert'
//img
import NotFound from "../../../assets/img/not-found.png"
import { BsArrowClockwise } from 'react-icons/bs'
import { MdSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md'
import { BiCommentError } from 'react-icons/bi'
//css
import '../../RepoList/List/List.css';

const Error = ({ errorType, setQuery }) => {
    return (
        <>
            {errorType === "ERR_INTERNET_DISCONNECTED" ?
                <Alert
                    messageIcon={<MdSignalWifiStatusbarConnectedNoInternet4 />} message={"Warning : please check your wifi connection"}
                    actionIcon={<BsArrowClockwise />} action={() => setQuery(prev => ({ ...prev }))}
                /> : errorType === "other" ?
                    <Alert
                        messageIcon={<BiCommentError />} message={"Warning : something went wrong"}
                        actionIcon={<BsArrowClockwise />} action={() => setQuery(prev => ({ ...prev }))}
                    /> : errorType === 404 ?
                        <img src={NotFound} align="center" className="img-alert" />
                        : null}
        </>
    )
}

export default Error
