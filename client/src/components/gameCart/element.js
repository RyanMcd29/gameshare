import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { TOGGLE_CART } from "../../utils/actions";


export default function CartElement ({ name, image, platform }) {
  
  return (
    <div className="game-cart list-group-item d-flex bg-dark text-white">
      <img className="img-thumbnail" src={image}/>
      <div className=" m-2 game-cart-details">
        <p>{name}</p>
        <p>{platform}</p>
      </div>
    </div>
  );
}