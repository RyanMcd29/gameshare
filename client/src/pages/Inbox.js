import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { useMutation } from '@apollo/client';
import { UPDATE_GAME_REQUEST } from '../utils/mutations';

import Auth from '../utils/auth';

const Inbox = () => {
    //TODO: Add functions to actually do something with the accept and reject buttons
    const handleAccept = () => {
        console.log('Request Accepted');
    };

    const handleReject = () => {
        console.log('Request Rejected');
    };

    return (
        <AnimatedPage>
            <br></br>
            <div className="card" style={{opacity:0.85}}>
                <div className="card-body">
                    <h1 className="card-title text-center">{Auth.getProfile().data.username}'s Game Requests</h1>
                </div>
            </div>
            {/* style={{width: "500px"}} */}
            <br></br><br></br>
            <section className='container'>
                {/* Rows to generate dynamically here. */}
                <div className="row mt-4 justify-content-center">
                    <div className="card col-10 align-self-center" >
                        <div className="row no-gutters">
                            <div className="col-sm-2">
                                <img className="card-img" src="/images/defaultimg.png" alt="User Photo"/>
                            </div>
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">William Cable</h5>
                                    <p className="card-text">Hey! My name is Will and I'd love to borrow your copy of God of War!</p>
                                    <button type="button" className="button-80 me-1" onClick={handleAccept}>Accept</button>
                                    <button type="button" className="button-80 me-1" onClick={handleReject}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 justify-content-center">
                    <div className="card col-10 align-self-center" >
                        <div className="row no-gutters">
                            <div className="col-sm-2">
                                <img className="card-img" src="/images/defaultimg.png" alt="User Photo"/>
                            </div>
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">William Cable</h5>
                                    <p className="card-text">Hey! My name is Will and I'd love to borrow your copy of God of War!</p>
                                    <button type="button" className="button-80 me-1">Accept</button>
                                    <button type="button" className="button-80 me-1">Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* //TODO: uncomment when the inbox page is dynamically loaded */}
            {/* <div className="row justify-content-center mt-4">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title mb-3 text-center">You don't have any requests!</h2>
                         </div>
                    </div>
                </div>
            </div>   */}


        <br></br>

        <div className="d-flex justify-content-center">  

            <Link to="/GameSearch">
                <button className="button-80 ms-1" role="button" type="button">Find Something to Play <i className="fa-sharp fa-solid fa-search"></i></button>
            </Link>

        </div>
        </AnimatedPage>

    );

};

export default Inbox;