import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';

const Inbox = () => {

    return (
        <AnimatedPage>
            <br></br>
            <div className="card" style={{opacity:0.85}}>
                <div className="card-body">
                    <h1 className="card-title text-center">Game Requests</h1>
                </div>
            </div>
            
            <br></br><br></br>

            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="col-md-4">
                        <h4 className="card-title">Game</h4>
                        </div>
                        <div className="col-md-4 text-center">
                        <h4 className="card-text">Requesting User</h4>
                        </div>
                        <div className="col-md-4 text-end">
                        <h4> accept/reject </h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="col-md-4">
                        <h4 className="card-title">Game</h4>
                        </div>
                        <div className="col-md-4 text-center">
                        <h4 className="card-text">Requesting User</h4>
                        </div>
                        <div className="col-md-4 text-end">
                        <h4> accept/reject </h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <div className="col-md-4">
                        <h4 className="card-title">Game</h4>
                        </div>
                        <div className="col-md-4 text-center">
                        <h4 className="card-text">Requesting User</h4>
                        </div>
                        <div className="col-md-4 text-end">
                        <h4> accept/reject </h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

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