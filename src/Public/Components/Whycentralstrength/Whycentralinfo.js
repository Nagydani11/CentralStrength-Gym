import React from "react";
import info1 from "./images/info1.jpg";
import './style/whycentralinfo.css';



export default function Whycentralinfo(){
    return(
        <div className="whycentralinfo">
            <h2>Relax and recover zone</h2>
            <div className="whycentralinfowrap">
                <img src={info1}/>
                <p>Want to recharge so that you can give it your all during your workout? Or let your body recover from that hard work after a vigorous cardio or strength training session? Which can! Because from now on you will find new Basic-Fit massage chairs in all our clubs. Sit down, open the Basic-Fit app, put in your earphones and treat yourself to the ultimate Body & Mind experience!</p>
            </div>
            <a href="#">More info</a>
            <h2>Basic fit membership</h2>
            <div className="whycentralinfowrap">
                <p>Want to recharge so that you can give it your all during your workout? Or let your body recover from that hard work after a vigorous cardio or strength training session? Which can! Because from now on you will find new Basic-Fit massage chairs in all our clubs. Sit down, open the Basic-Fit app, put in your earphones and treat yourself to the ultimate Body & Mind experience!</p>
                <img src={info1}/>
            </div>
            <a href="#">Basic fit clubs</a>
        </div>
    )
}