import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const Welcome = () => {

    return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
        
        <div className='container'>
            <header className='row text-center'>
                <h1>Game App!</h1>
                <h5>Share Games, AnyTime, Anywhere</h5>
            </header>

            <div className='row text-center'>
                <Link to="/login">
                    <button>Lets Get Started!</button>
                </Link>
            </div>
        </div> 

    </div>
    );

};

export default Welcome;