//package
import React from 'react'
//components
import Bar from '../component/Common/Bar/Bar';
import SearchBar from '../component/Home/SearchBar/SearchBar';
//img
import Hero from '../assets/img/hero.png'
//css
import './page.css'

const Home = () => {
    return (
        <>
            <Bar title="Dcard 2022 Web Frontend Intern Homework" />
            <div className="container">
                <div className="home-wrapper">
                    <div className="title-container">
                        <h1>GitHub REST API</h1>
                        <p>
                            search your own repo <br />
                            by entering your username !
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
