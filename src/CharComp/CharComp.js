import React from 'react';
import './CharComp.css'


const CharComp = (props) => 
{
    return(
        <div className = "CharComp">
        <p onClick={props.click}>{props.inchar}</p>
        </div>
    )
   
}

export default CharComp;