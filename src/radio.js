import React from "react";
import "./input.css";

const radioButton=({name,placeholder})=>{
    return(
     <div className="radio">
         <input type="radio" value={name} name={placeholder}/>{name}
     </div>
    );
}
export default radioButton;