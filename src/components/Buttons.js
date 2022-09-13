import React from "react";

function Buttons({name, fruit,setFruit}) {
 return(
    <div className="button">
        <h1>{name}</h1>
        <button
            disabled={fruit === 0}
            onClick={()=> setFruit(fruit -1)}
        >-</button>
        {fruit}
        <button
            onClick={()=> setFruit(fruit +1)}
        >+</button>
    </div>
        );
}
export default Buttons;

