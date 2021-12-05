import React from "react";
import "./input.css";
const Input = ({ name, placeholder,changeHandle,id }) => {
  return (
    <div className="zo">
    {
      
     id==null ?<input placeholder={placeholder} defa={name} onChange={changeHandle}/>:<input placeholder={placeholder} defa={name} onChange={changeHandle} readOnly/>
   
    }
     </div>
   
  );
};
export default Input;
