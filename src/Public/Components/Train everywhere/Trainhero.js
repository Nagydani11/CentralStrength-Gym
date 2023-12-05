import React from "react";
import trainhero from "./images/hero.jpg";

export default function Trainhero(){
    return(
        <div className="trainherowrap">
            <img src={trainhero}/>
            <h1>Train everywhere</h1>
            <p>You may not always feel like going to the gym. Because the weather outside is terrible, or you just don't have time to commute. However, you can use a quick workout. For an energy boost to start your day well or to relax afterwards. Basic-Fit believes that exercise is all the more fun when it is offered in a flexible form. Whether at home, in the gym or outside. As a member of The Orange Family there are plenty of opportunities. This way you never have to sit still. Go for it!</p>
        </div>
    )
}


