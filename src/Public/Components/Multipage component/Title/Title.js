import React from "react";
import '../Title/title.css';

export default function Title(){
    return(
        <div className="titlewrap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="titleBuilding">
                <span class="material-symbols-outlined" id="titleicon">home</span>
                <h4>1300+ Clubs</h4>
            </div>
            <div className="titleSport">
                <span class="material-symbols-outlined" id="titleicon">schedule</span>
                <h4>Sport 24/7</h4>
            </div>
            <div className="titleWeight">
                <span class="material-symbols-outlined" id="titleicon">fitness_center</span>
                <h4>Beste</h4>
            </div>
            <div className="titleGroup">
                <span class="material-symbols-outlined" id="titleicon">groups</span>
                <h4>Group</h4>
            </div>
            <div className="titleApp">
                <span class="material-symbols-outlined" id="titleicon">phone_iphone</span>
                <h4>Gratis mobile App</h4>
            </div>
        </div>
    )
}