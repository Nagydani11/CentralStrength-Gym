import React from "react";
import centralheroimage from './images/central1.jpg';
import './style/whycentralhero.css';



export default function WhycentralHero(){
    return(
        <div className="whycentralhero">
            <img src={centralheroimage} />
            <h1>Why central strength</h1>
            <p>Registering with Basic-Fit is a very good first move. The next step is finding your routine! Basic-Fit helps you with this. Because if you are and remain motivated, you are certainly on your way to success by making fitness your basic. After a short online intake, you will receive a personal training schedule for the first 6 weeks to help you get started. In addition, our Extras help you stay motivated.</p>
        </div>
    )
}