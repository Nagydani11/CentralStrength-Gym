import React from "react";
import cardsone1 from './images/cardsone1.jpeg';
import cardsone2 from './images/cardsone2.jpeg';
import cardsone3 from './images/cardsone3.jpeg';
import './style/whycentralcardsone.css';




export default function Whycentralcardsone(){
    return(
        <div className="whycentralcardswrap">
            <div className="whycentralcard">
                <img src={cardsone1} />
                <h4>1300+ clubs</h4>
                <p>More info</p>
            </div>
            <div className="whycentralcard">
                <img src={cardsone2} />
                <h4>7 trainingzones</h4>
                <p>More info</p>
            </div>
            <div className="whycentralcard">
                <img src={cardsone3} />
                <h4>Latest equipment</h4>
                <p>More info</p>
            </div>
        </div>
    )
}