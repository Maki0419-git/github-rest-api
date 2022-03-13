// components
import Bar from '../component/Common/Bar';
import Header from '../component/Common/Header';
import Info from '../component/Repo/Info';
// package
import { RiGitRepositoryFill } from 'react-icons/ri'

const Repo = () => {
    return (
        <>
            <Bar title="Repository" goback />
            <div className="container">
                <div className="repo-container">
                    <Header header="Repository Info" headerIcon={<RiGitRepositoryFill />} />
                    <Info />
                </div>
            </div>
        </>
    )
}

export default Repo
