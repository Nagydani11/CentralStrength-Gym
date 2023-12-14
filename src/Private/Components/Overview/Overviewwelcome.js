import React from "react";
import welcomeimage from './image/train5.jpg'

export default function Overviewwelcome(){
    return(
        <div className="overwelcomewrap">
            <div className="welcometext">
                <h1>Welcome</h1>
                <p>Manage your membership at Basicfit whenever and wherever you want!</p>
            </div>
            <div className="welcomeimage">
                <img src={welcomeimage} />
            </div>
        </div>
    )
}