import React from "react";
import './style.css';
import todo from './img/Todo.png';
import pic from './img/pic.png';
import { Link } from 'react-router-dom';
import Header from './header.jsx'
const Home = () => {
    return (
        <div> 
            <header>
               <Header/>
            </header>

            <div className="container">
                <div className="content">
                    <main>
                        <div className="title">
                            <p>Welcome.<br />
                                <span>This is my first challenge with HTML & CSS.</span>
                            </p>
                        </div>
                        <div className="image">
                            <img src={pic} alt="To Do List" />
                        </div>
                    </main>
                </div>
            </div>

            <div className="container">
                <div className="end">
                    <p>This app was created by <span>Aon23</span></p>
                </div>
            </div>
        </div> 
    );
};

export default Home;
