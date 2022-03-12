import React from 'react'
import { HomeBar } from '../component/Common/Bar';
import SearchBar from '../component/Home/SearchBar';

const Home = () => {
    return (
        <>
            <HomeBar />
            <div className="container-center">
                <div className="home-container">
                    <div className="title-container">
                        <h1>GitHub REST API</h1>
                        <p>
                            search your own repo <br />
                            by entering your uername !
                        </p>
                        <SearchBar />
                    </div>
                    <div className="img-container">456</div>
                </div>


            </div>
        </>
    )
}

export default Home
