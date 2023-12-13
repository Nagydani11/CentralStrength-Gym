import React from "react";
import homeappimg from "./imges/homeapp.webp"

export default function Homeapp(){
    return(
        <div className="homeappwrap">
            <div className="homeappimg">
                <img src={homeappimg}/>
            </div>
            <div className="homeapptext">
                <h1>Basic fit app for your fitness</h1>
                <h5>Customized fitness content</h5>
                <h5>Customized fitness content</h5>
                <h5>Customized fitness content</h5>
                <a href="/">See all benefits</a>
            </div>
        </div>
    )
}