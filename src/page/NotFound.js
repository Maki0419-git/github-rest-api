//components
import Bar from '../component/Common/Bar/Bar';
//img
import NotFoundIMG from '../../src/assets/img/not-found.png'
//css
import './page.css';

const NotFound = () => {
    return (
        <>
            <Bar title="Dcard 2022 Web Frontend Intern Homework" />
            <div className="container">
                <img src={NotFoundIMG} align="center" height="100%" />
            </div>

        </>
    )
}

export default NotFound
