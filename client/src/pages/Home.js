import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Home = ({ username }) => {
  const buttonRight = {
    position: 'absolute',
    top: '10px',
    right: '10px'
  };

  return (
    <AnimatedPage>
    <br></br>
    <br></br>
    <div className="d-flex justify-content-center">
     <h2> {Auth.getProfile().data.username}'s Dashboard</h2> 
    </div>
     <br></br>

      <div className="card-deck row justify-content-center">

        <div className="card m-4" style={{width: "500px", height: "400px"}}>
            <div className="card-body text-center">
                <h5 className="card-title"> My Games <i className="fa-sharp fa-solid fa-gamepad ms-1"></i></h5>
                <br></br>
                <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 1</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 2</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 3</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 4</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 5</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 6</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 7</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 8</div>
                    </div>
                </div>
            </div>
            <Link to="/games">
                <button className="btn btn-lg btn-block btn-primary mt-1" type="button">Update Library!</button>
            </Link>
    </div>
    </div>


    <div className="card m-4" style={{width: "500px", height: "400px"}}>
            <div className="card-body text-center">
            <h5 className="card-title">Borrowed Games <i className="fa-sharp fa-solid fa-exchange ms-1"></i></h5>
            <br></br>
                <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 1</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 2</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 3</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 4</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 5</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 6</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 7</div>
                    </div>
                    <div className="col">
                    <div className="p-3 mb-2 bg-success text-white">Game 8</div>
                    </div>
                </div>
            </div>
            <Link to="/games">
                <button className="btn btn-lg btn-block btn-primary mt-1" type="button">Borrow Games!</button>
            </Link>
    </div>
    </div>


</div>

<br></br>

    <div className="d-flex justify-content-center">  

        <Link to="https://rawg.io/" target="_blank">
            <button className="button-80 ms-1" role="button" type="button">Visit Gaming Website!<i className="fa-sharp fa-solid fa-paper-plane ms-2"></i></button>
        </Link>

    </div>
        
</AnimatedPage>
  );
};

export default Home;
