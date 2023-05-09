import React from "react";

export default function UserListGameItem (game) {
    const { name, image, platform } = game;

    return (
        <div className="list-group-item d-flex"> 
            <img className="img-thumbnail w-25" src={image}/>
            <div className=" m-2 game-cart-details">
                <p>{name}</p>
                <p>{platform}</p>
            </div>
    </div>
    )
}