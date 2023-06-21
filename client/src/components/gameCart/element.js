import React from "react";


//-- Component that renders a single game in the cart --//
export default function CartElement ({ name, image, platform }) {
  
  return (
    <div className= " game-cart list-group-item d-flex bg-dark text-white">
      <img className="img-thumbnail" src={image}/>
      <div className=" m-2 game-cart-details">
        <h5>{name}</h5>
        <p className={"platform-btn " + platform.toLowerCase().replace(' ', '-')} >{platform}</p>
      </div>
    </div>
  );
}
