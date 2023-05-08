import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { TOGGLE_CART } from "../../utils/actions";

export default function CartElement (gameDetails) {
    const { name, image, platform } = gameDetails

return (
    <div className="game-cart list-group-item d-flex"> 
        <img className="img-thumbnail" src={image}/>
        <div className=" m-2 game-cart-details">
            <p>{name}</p>
            <p>{platform}</p>
        </div>
    </div>
)
}