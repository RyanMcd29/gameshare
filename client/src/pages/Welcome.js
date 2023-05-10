import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';
import AnimatedPage from '../components/AnimatedPage';

// vCenterWel

const Welcome = () => {

    return (
        <AnimatedPage>
            <div className='container align-middle justify-content-center align-items-center vCenterWel'>
                <div className='container'>
                    <div className='text-center'>
                        <i className="fa-sharp fa-solid fa-ghost fa-4x m-2"></i>
                        <i className="fa-solid fa-dice-five fa-4x m-2"></i>
                        <i className="fa-solid fa-headset fa-4x m-2"></i>
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

        </AnimatedPage>
    
    );

};

export default Welcome;