import React from "react";
import supportheroimage from './images/supporthero.jpg'
import './styles/supporthero.css'

export default function Supporthero(){
    return(
        <div className="supporthero">
            <img src={supportheroimage}/>
            <h1>Fitness Support</h1>
        </div>
    )
}