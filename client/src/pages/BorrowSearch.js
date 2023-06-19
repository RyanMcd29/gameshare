import React, { useEffect, useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import { useGameContext } from '../utils/GameContext';
import { useQuery } from '@apollo/client';
import { GET_AVAILABLE_GAMES } from '../utils/queries'
import BorrowListItem from '../components/BorrowPage/listItem';



const Borrow = () => {

    const [state, dispatch] = useGameContext()

    const [ filteredGames, setFilteredGames ] = useState([])
    const [ search, setSearch ] = useState('')
    
    // state.availableGames = GetAvailableGames()
    useEffect(()=>(
        setFilteredGames(state.availableGames)

    ),[state.availableGames])

    const searchItems = (searchValue) => {
        setSearch(searchValue)
        
        if (state.availableGames){
            const filterGames = state.availableGames.filter((game) => {
                //console.log("game details", game.gameDetails[0].name)
                return Object.values(game.gameDetails[0].name).join('').toLowerCase().includes(search.toLowerCase())
            })

            //console.log("filteredGames:", filterGames)
            setFilteredGames(filterGames)

        }   
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

    <div className="shadow-lg card m-4 cardScroll" style={{width: "500px", height: "400px"}}>
            <div className="card-body text-center">
            <h5 className="card-title">Request Games to Borrow: <i className="fa-sharp fa-solid fa-exchange"></i></h5>
                <input 
                            className="bg-dark text-white text-body-emphasis form-control"
                            icon="search"
                            placeholder="search"
                            onChange={(e) => searchItems(e.target.value)}
                />
            <br></br>
            <div className="container-fluid">
                <div className="row">
                    { filteredGames.length ? (
                    <div className="h-75">
                        <ul className="row flex">
                        { filteredGames.map((game) => (
                            <BorrowListItem
                                key={game._id}
                                id={game._id}
                                name={game.gameDetails[0].name}
                                image={game.gameDetails[0].img}
                                platforms={game.platform}
                                genres={game.gameDetails[0].genres}
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
