import React from "react";
import extras1 from './images/extras1.jpeg';
import extras2 from './images/extras2.jpg';
import extras3 from './images/extras3.jpeg';
import './style/whycentralextras.css';


export default function Whycentralextras(){
    return(
        <div className="extras">
            <h2>Extras</h2>
            <div className="extraswrap">
                <div className="extrascard">
                    <img src={extras1}/>
                    <h4>Yanga sports water</h4>
                </div>
                <div className="extrascard">
                    <img src={extras2}/>
                    <h4>Personal coach</h4>
                </div>
                <div className="extrascard">
                    <img src={extras3}/>
                    <h4>Training intro</h4>
                </div>
            </div>
        </div>
    )
}