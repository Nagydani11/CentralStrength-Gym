import React from "react";
import parttwoimage from './images/parttwo1.jpeg';
import './style/whycentralpart2.css'

export default function Whycentralparttwo(){
    return(
        <div className="centralparttwo">
            <h3>Get fite true and whenever you want</h3>
            <div className="centralparttwowrap">
                <img src={parttwoimage}/>
                <p>At Basic-Fit you get many options for training in the gym. But we also believe that you can get fit wherever you want. Love for what you do, when you want and where you want, is the key to achieving your goals. Whether you want to train at the club, at home or outside, you decide. We are here to help you. And with the Basic-Fit app this becomes even more fun and easier!</p>
            </div>
        </div>
    )
}