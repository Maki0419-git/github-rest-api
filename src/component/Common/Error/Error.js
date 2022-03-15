//components
import Alert from '../../Common/Alert/Alert'
//img
import NotFound from "../../../assets/img/not-found.png"
import { BsArrowClockwise } from 'react-icons/bs'
//css
import '../../RepoList/List/List.css';

const Error = ({ error, errorMessage, setQuery }) => {
    return (
        <>
            {errorMessage === "404 Not Found" ?
                <>
                    <img src={NotFound} align="center" className="img-alert" />
                    <Alert
                        open={error}
                        message={`Waring : ${errorMessage}`}
                        actionIcon={<BsArrowClockwise />} action={() => setQuery(prev => ({ ...prev }))}
                    />
                </>
                :
                <Alert
                    open={error}
                    message={`Waring : ${errorMessage}`}
                    actionIcon={<BsArrowClockwise />} action={() => setQuery(prev => ({ ...prev }))}
                />
            }
        </>
    )
}

export default Error
