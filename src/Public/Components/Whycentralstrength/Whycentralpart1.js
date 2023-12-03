import React from "react";
import partoneimage from "./images/partone1.jpeg";
import './style/whycentralpart1.css';

export default function Whycentralpartone(){
    return(
        <div className="partone">
            <h3>Basic fit clubs</h3>
            <div className="partonewrap">
                <p>In all our clubs you will find the latest equipment from Matrix and TechnoGym. Everything you need for your perfect workout! You can do your own workout in the training zones, or take a virtual lesson in the GXR room for group lessons. Many clubs also offer live group lessons!</p>
                <img src={partoneimage}/>
            </div>
        </div>
    )
}