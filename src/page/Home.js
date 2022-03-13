import React from 'react'
import Bar from '../component/Common/Bar';
import SearchBar from '../component/Home/SearchBar';
import Hero from '../assets/img/hero.png'

const Home = () => {
    return (
        <>
            <Bar title="Dcard 2022 Web Frontend Intern Homework" />
            <div className="container-center">
                <div className="home-wrapper">
                    <div className="title-container">
                        <h1>GitHub REST API</h1>
                        <p>
                            search your own repo <br />
                            by entering your uername !
                        </p>
                        <SearchBar />
                    </div>
                    <div className="img-container">
                        <img src={Hero} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home
