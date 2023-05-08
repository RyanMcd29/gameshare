import React from "react";

export default function GameCartElement (game) {
    console.log(game)
    const { name, image, platform, genres } = game
    
    return (
        <div>
            <img className="img-thumbnail" src={image}/>
            <p>{name}</p>
        </div>
    )
}