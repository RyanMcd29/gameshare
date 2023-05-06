import React from "react";

export default function GameItem (game) {
    console.log(game)

    const { name, image, platforms, genres } = game

    console.log(platforms)
    return (
        <div className="card">
            <img src={image}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                { platforms.map((platform) => {
                    return (<p key={platform} className={platform}>{platform}</p>)
                })}
            </div>
        </div>
    )


}