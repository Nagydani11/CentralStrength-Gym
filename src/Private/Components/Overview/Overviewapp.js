import React from "react";
import mobileimage from "./image/mobile.webp"

export default function Overviewapp(){
    return(
        <div className="overviewapp">
            <div className="overviewinfotext">
                <h2>Basic fitt app</h2>
                <p>Achieve your goals and stay motivated with our app</p>
                <a href="#">Download the app</a>
            </div>
            <div className="overviewinfoimage">
                <img src={mobileimage}/>
            </div>
        </div>
    )
}