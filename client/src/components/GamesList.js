import React, { useEffect, useState } from "react";
import { useGameContext } from "../utils/GameContext";
import GameItem from './gameitem/gameitem.js'
import GameCart from './gameCart/index'

//--- Component rendering the list of games ---//
export default function GamesList () {
    //-- load state --//
    const [ state, dispatch ] = useGameContext()

    // Cart active
    const [cartActive, setCartActive] = useState(false)
    
    //-- State to hold the list of games based on the search criteria --//
    const [ filteredGames, setFilteredGames ] = useState(state.gameLibrary)
    const [ search, setSearch ] = useState('')

    //-- Function to update the search criteria and update the list --//
    const searchItems = (searchValue) => {
        setSearch(searchValue)
        
        const filterGames = state.gameLibrary.filter((game) => {
            return Object.values(game.name).join('').toLowerCase().includes(search.toLowerCase())
        })

        setFilteredGames(filterGames)
    }

    const toggleCart = () => {
        setCartActive(!cartActive)
    }

    //-- useEffect hook to update the game list when the state.gameLibrary changes --//
    useEffect(() => {
        setFilteredGames(state.gameLibrary)
    }, [state.gameLibrary])
    
    
    return (
        <div className="game-library container-sm h-100">
            {/* Search Bar */}
        <div className="row m-3 h-100">
            <div className="col-12 h-100">
                <div className="row">
                <div className="input-group mb-3 col">
                    <span className="input-group-text">Search for a Game</span>
                    <input 
                        className="text-bg-dark form-control"
                        icon="search"
                        placeholder="search"
                        onChange={(e) => searchItems(e.target.value)}
                    />
                    {/* <p onClick={()=>{toggleCart()}}>Cart</p> */}
                    {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Open Cart
                    </button>
                    { cartActive && ( */}
                        {/* <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"> */}
                            <GameCart/>
                        {/* </div> */}
                    {/* ) } */}
            </div>
        </div>
            
            { filteredGames.length ? (
                <div className="z-0 h-75" >
                    <ul className="row flex">
                    { filteredGames.map((game) => (
                        <GameItem
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
            
            {/* Render if gamestoadd in state */}
            
            </div>

            </div> 
        </div>
    )
   

}
    
   
