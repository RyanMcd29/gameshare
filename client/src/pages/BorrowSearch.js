import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';


const Borrow = () => {
  
  return (
    <AnimatedPage>
    <br></br>
    <br></br>
    <div className="d-flex justify-content-center">
     <h2> Borrow Games!</h2> 
    </div>
     <br></br>

      <div className="card-deck row justify-content-center">

    <div className="card m-4" style={{width: "500px", height: "400px"}}>
            <div className="card-body text-center">
            <h5 className="card-title">Request Games to Borrow: <i className="fa-sharp fa-solid fa-exchange"></i></h5>
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
    </div>
    </div>


</div>

<br></br>

    <div className="d-flex justify-content-center">  

        <Link to="/homepage">
            <button className="button-80 ms-1" role="button" type="button">Return to Dashboard</button>
        </Link>

    </div>
        
</AnimatedPage>
  );
};

export default Borrow;
