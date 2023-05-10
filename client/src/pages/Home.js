import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { useGameContext } from '../utils/GameContext';
//import Components
import OwnedList from '../components/ownedList/ownedList';

import { QUERY_USER_GAMES } from '../utils/queries';
import auth from '../utils/auth';

import UserListGameItem from '../components/UserGameListItem';

const Home = () => {
    const [state, dispatch] = useGameContext();

    console.log("userGames State", state.userGames)
    
    // const GetUserDetails = () => {
    //     //get userId
    //     const userName = auth.getProfile().data.username
    //     console.log(userName)
    
    //     const { loading, data } = useQuery(QUERY_USER_GAMES, {variables: {
    //         username : userName
    //     }})
    
    //     const userGames = data?.userGames || []
    //     return userGames
    // }

    // const [userDetails, setUserDetails] = useState([])

    // setUserDetails(GetUserDetails)

  return (
    <AnimatedPage>
    <div className='container'>
        <br></br>
    <div className="row d-flex text-center">
        <h2>Dashboard</h2>
        <h6>Manage your Games!</h6>
    </div>
    <div className='row'>
        <div className='col d-flex justify-content-center p-0 m-3'>
                <div className="card cardScroll" style={{width: "480px", height: "500px"}}>
                    <div className='row sticky-top m-0'>
                        <h5 className="card-title text-center p-2 homeCardHeader"> My Games <i className="fa-sharp fa-solid fa-gamepad ms-1"></i></h5>
                    </div>
                    <div className="card-body text-center">
                        <div className="vh-75">
                            <div className="row m-0">
                            { state.userGames.userGames.map((game) => {
                                console.log(game)
                                        return <UserListGameItem
                                            id={game._id}
                                            key={game._id}
                                            name={game.name}
                                            image={game.img}
                                            platform={game.platform}/>                          
                                    }) }
                            </div>
                        </div>
                    </div>
                    <Link to="/games" className='row text-center sticky-bottom p-0 m-0'>
                        <button className="btn btn-lg btn-block btn-primary p-2 mb-1" type="button">Update Library!</button>
                    </Link>

                </div>
        </div>

        <div className='col d-flex justify-content-center p-0 m-3'>
                <div className="card cardScroll" style={{width: "480px", height: "500px"}}>
                <div className='row sticky-top m-0'>
                    <h5 className="card-title text-center p-2 homeCardHeader"> Borrowed Games <i className="fa-sharp fa-solid fa-gamepad ms-1"></i></h5>
                </div>
                    <div className="card-body text-center">
                        <div className="vh-75">
                            <div className="row m-0 ">
                            { state.userGames.borrowedGames.map((game) => {
                                console.log(game)
                                        return <UserListGameItem
                                            id={game._id}
                                            key={game._id}
                                            name={game.name}
                                            image={game.img}
                                            platform={game.platform}/>                          
                                    }) }
                            </div>
                        </div>
                    </div>
                    <Link to="/games" className='row text-center sticky-bottom p-0 m-0'>
                        <button className="btn btn-lg btn-block btn-primary p-2 mb-1" type="button">Borrow Games!</button>
                    </Link>
                </div>
        </div>
    </div>

    </div>
    
    {/* Card section end */}


      {/* <div className="card-deck row justify-content-center">
        <div className="card overflow-scroll m-4" style={{width: "500px", height: "400px"}}>
        <div className='row sticky-top'>
            <h5 className="card-title text-center p-2 homeCardHeader"> My Games <i className="fa-sharp fa-solid fa-gamepad ms-1"></i></h5>
        </div>
            <div className="card-body text-center p-0">
                
                
                <div className="vh-75">
                    <div className="row">
                    { state.userGames.userGames.map((game) => {
                        console.log(game)
                                return <UserListGameItem
                                    key={game._id}
                                    name={game.name}
                                    image={game.img}
                                    platform={game.platform}/>                          
                            }) }
                    </div>

                </div>

            </div>
            <Link to="/games" className='text-center row sticky-bottom'>
                <button className="btn btn-lg btn-block btn-primary mt-1" type="button">Update Library!</button>
            </Link>
        </div>
      
        
        
        

        <div className='col justify-content-center'>
        <div className="card m-4 overflow-scroll" style={{width: "500px", height: "400px"}}>
            <div className="card-body text-center">
            <h5 className="card-title">Borrowed Games <i className="fa-sharp fa-solid fa-exchange ms-1"></i></h5>
            <br></br>
                <div className="container-fluid">
                    <div className="row">
                    { state.userGames.borrowedGames.map((game) => {
                            console.log(game)
                                    return <UserListGameItem
                                        key={game._id}
                                        name={game.name}
                                        image={game.img}
                                        platform={game.platform}/>                          
                                }) }
                    </div>
            </div>

        </div>
        <Link to="/games" className='text-center row sticky-bottom'>
            <button className="btn btn-lg btn-block btn-primary mt-1" type="button">Borrow Games!</button>
        </Link>
        </div>

        </div>

                            


        </div> */}

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
