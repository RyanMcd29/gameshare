import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";

export default function GameCart () {
    const [state, dispatch] = useGameContext()
    const [selected, setSelected] = useState(false)

    return (
        <div>
                {/* Arrow to pull up from bottom */}
                
                { /* Save button */ }
                <button className="btn btn-success">Add Games</button>
                
                {/* List of games to add */}
                <ul>
                    {console.log(state.gamesToAdd)}
                    { state.gamesToAdd.map((game) => {
                        { return (
                            <div>
                                <img className="img-thumbnail" src={game.img}/>
                                <p>{game.name}</p>
                            </div>
                        )}
                       
                    }) }
                </ul>
    </div>
    )
    
}