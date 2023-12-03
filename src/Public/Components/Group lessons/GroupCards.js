import React from "react";
import glimage2 from './images/gl2.jpg';
import glimage3 from './images/gl3.jpg';
import glimage4 from './images/gl4.jpg';
import './styles/groupcards.css';


export default function GroupCards(){
    return(
        <div className="groupCards">
            <h1>Discover our group lessons</h1>
            <div className="groupCardsWrapper">
                <div className="glCard">
                    <img src={glimage2}/>
                    <h3>Live grouplesson</h3>
                    <p>Exercise with others and join an energetic live class.</p>
                    <p>More info</p>
                </div>
                <div className="glCard">
                    <img src={glimage3}/>
                    <h3>Live grouplesson</h3>
                    <p>Exercise with others and join an energetic live class.</p>
                    <p>More info</p>
                </div>
                <div className="glCard">
                    <img src={glimage4}/>
                    <h3>Live grouplesson</h3>
                    <p>Exercise with others and join an energetic live class.</p>
                    <p>More info</p>
                </div>
            </div>
        </div>
    )
}