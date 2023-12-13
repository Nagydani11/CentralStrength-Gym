import React from "react";

export default function Homeclub(){
    return(
        <div className="homeclub">
            <div className="inputwrap">
                <div className="inputText">
                    <h2>Find your club</h2>
                    <p>230+ clubs in Netherland</p>
                </div>
                <div className="homeinput">
                    <input type="text" placeholder="Find a club nearby" />
                </div>
            </div>
            <div className="homeCardsWrap">
                <a>Amsterdam</a>
                <a>Amsterdam</a>
                <a>Amsterdam</a>
                <a>Amsterdam</a>
                <a>Amsterdam</a>
                <a>Amsterdam</a>
            </div>
        </div>
    )
}