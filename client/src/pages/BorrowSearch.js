import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useGameContext } from '../utils/GameContext';
import { useQuery } from '@apollo/client';
import { GET_AVAILABLE_GAMES } from '../utils/queries'
import BorrowListItem from '../components/BorrowPage/listItem';




const Borrow = ({ username }) => {

    const GetAvailableGames = () => {
        const { loading, data } = useQuery(GET_AVAILABLE_GAMES)
        const availableGames = data?.availableGames || []
        
        var gamesList = []

        console.log("availablegames",availableGames)
        availableGames.map((user) => {
            console.log()
            gamesList = gamesList.concat(user.userGames)
        
        })

        return gamesList
    }



    const [state, dispatch] = useGameContext()

    const [ filteredGames, setFilteredGames ] = useState(state.gameLibrary)
    const [ search, setSearch ] = useState('')
    
    state.availableGames = GetAvailableGames()
    
    const searchItems = (searchValue) => {
        setSearch(searchValue)
        
        const filterGames = state.availableGames.filter((game) => {
            return Object.values(game.name).join('').toLowerCase().includes(search.toLowerCase())
        })

        setFilteredGames(filterGames)
    }


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
                <input 
                            className="text-bg-dark form-control"
                            icon="search"
                            placeholder="search"
                            onChange={(e) => searchItems(e.target.value)}
                />
            <br></br>
                <div className="container-fluid">
                <div className="row">
                    { filteredGames.length ? (
                    <div className="h-75" >
                        <ul className="row flex">
                        { filteredGames.map((game) => (
                            <BorrowListItem
                                key={game._id}
                                id={game._id}
                                name={game.name}
                                image={game.img}
                                platforms={game.platforms}
                                genres={game.genres}
                            />
                        ))}
                        </ul>
                    </div>
                ) : (<h3>No games added!</h3> )}
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
