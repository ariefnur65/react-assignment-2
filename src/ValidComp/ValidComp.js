import React from 'react'
import './ValidComp.css'

const ValidComp = (props) => 
{
    let valid = null;
    if(props.input.length >0)
        valid = props.input.length < 5 ? "Text Input is Too Short": "Text Input is enough";
    
    return (
        <div className="ValidComp">
        <p>{valid}</p>
        </div>
    ) 
}
export default ValidComp;