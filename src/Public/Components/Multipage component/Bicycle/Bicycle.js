import React from "react";
import bicycleimage from "./images/bicycle.webp"
import './bicycle.css'


export default function Bicycle(){
    return(
        <div className="bicyclewrap">
            <div className="bicycleText">
                <h2>Go all in</h2>
                <p>ALL-IN is the ultimate fitness experience that allows you to train at home and in the gym the way you want. Get the most out of your fit life with the Smart Bike for home, which connects you to the ALL-IN Workout App and gives you access to all Basic-Fit clubs for you and your friend. This way you can go ALL-IN anytime, anywhere!</p>
                <a href="#">Yes I want that</a>
            </div>
            <div className="bicycleImage">
                <img src={bicycleimage} />
            </div>
        </div>
    )
}