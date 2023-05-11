import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useGameContext } from '../utils/GameContext';

// import OwnedList from '../components/ownedList/ownedList';
// import { QUERY_USER_GAMES } from '../utils/queries';

import UserListGameItem from '../components/UserGameListItem';
import BorrowedGameListItem from '../components/userBorrowedGameListItem'
import auth from '../utils/auth';

//-- initialize the state and dispatch using the useGameContext hook --//
const Home = () => {
    const [state, dispatch] = useGameContext();

    console.log("userGames State", state.userGameLibrary)

    const GamesBorrowedByUser = () => {
        const userId = auth.getProfile().data._id
        return state.userGameLibrary.filter((game) => {
            console.log("game in library", game.isBorrowedBy)
            if (game.isBorrowedBy != null ){
                if (game.isBorrowedBy._id === userId){
                    return game
                }
            }
        }
        )
    }

    const [borrowedGames, SetBorrowedGame] = useState(GamesBorrowedByUser())
    
    console.log("borrowed games", borrowedGames)

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
                            { state.userGames.userGames && state.userGames.userGames.map((game) => {
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
                            { borrowedGames && borrowedGames.map((game) => {
                                console.log(game.gameDetails[0])
                                        return <BorrowedGameListItem
                                            id={game._id}
                                            key={game._id}
                                            name={game.gameDetails[0].name}
                                            image={game.gameDetails[0].img}
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
