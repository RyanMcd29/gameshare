import React, { useState } from "react";

export default function GameItem (game) {

    const { name, image, platforms, genres } = game

    const [ isSelected, setSelected ] = useState(false)

    const submitGame = () => {
        console.log('hello')
        setSelected(false)
    }

    const renderAddGameForm = () => {
        console.log('hello')
        setSelected(true)
    }

    return (
        <div>
            <div className="card">
                <img src={image}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    { isSelected ? (
                        <ul>
                            { platforms.map((platform)=>{
                                return (<button onClick={submitGame} key={platform} className={platform}>{platform}</button>)
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