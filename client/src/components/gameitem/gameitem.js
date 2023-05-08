import { Button } from "bootstrap";
import React, { useState } from "react";
import { useGameContext } from "../../utils/GameContext";

export default function GameItem (game) {

    const [ state, dispatch ] = useGameContext()

    const { id, name, image, platforms } = game

    const [ isSelected, setSelected ] = useState(false)
    // const [ mouseOver, setMouseOver ] = useState(false)
    console.log(game)
    const submitGame = (platform) => {
        state.gamesToAdd.push({
            _id: game.id,
            name: game.name,
            img: game.image,
            genres: game.genres,
            platform: platform.platform
        })

        console.log(state.gamesToAdd)
        setSelected(false)
    }

    const renderAddGameForm = () => {
        setSelected(true)
    }

    return (
        <div key={id} className="col-sm-6 col-md-3">
            <div className="card">
                <img className="card-img-top game-img" src={image}/>
                <div className= "card-body">
                    <h5 className="card-title">{name}</h5>
                    { isSelected ? (
                        <ul>
                            { platforms.map((platform)=>{
                                return (<button onClick={()=>submitGame({platform})} value={platform} key={platform} className={platform}>{platform}</button>)
                            })}
                        </ul>)
                    : 
                        <button onClick={renderAddGameForm}>add this game</button>
                    }
                </div>
            </div>
        </div>
        

       
    )


}