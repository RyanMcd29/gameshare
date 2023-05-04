import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const Welcome = () => {

    return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
        
        <div className='container'>
            <div className='row justify-content-center'>
                <i className="col-1 fa-sharp fa-solid fa-ghost fa-4x"></i>
                <i className="col-1 fa-solid fa-dice-five fa-4x"></i>    
                <i className="col-1 fa-regular fa-swords fa-4x"></i>
            </div>

            <header className='row text-center'>
            
                <h1>GameShare.</h1>
                <h6>Share Games, AnyTime, Anywhere</h6>
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