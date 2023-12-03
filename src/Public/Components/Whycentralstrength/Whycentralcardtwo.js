import React from "react";
import cardtwoone from "../Whycentralstrength/images/cardtwo1.jpeg";
import cardtwotwo from "../Whycentralstrength/images/cardtwo2.jpg";
import cardtwothree from "../Whycentralstrength/images/cardtwo3.jpeg";

export default function Whycentralcardstwo(){
    return(
        <div className="whycentralcardswrap">
            <div className="whycentralcard">
                <img src={cardtwoone} />
                <h4>1300+ clubs</h4>
                <p>More info</p>
            </div>
            <div className="whycentralcard">
                <img src={cardtwotwo} />
                <h4>7 trainingzones</h4>
                <p>More info</p>
            </div>
            <div className="whycentralcard">
                <img src={cardtwothree} />
                <h4>Latest equipment</h4>
                <p>More info</p>
            </div>
        </div>
    )
}