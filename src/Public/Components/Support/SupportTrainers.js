import React from "react";
import woman from './images/woman.webp';
import man from './images/man.webp'

export default function SupportTrainers(){
    return(
        <div className="trainers">
            <div className="trainerHeader">
                <h3>Personal trainers and physiotherapy</h3>
                <p>Achieve your fitness goals with the help of one of our personal trainers or contact the physiotherapist to have your injuries checked out!</p>
                <div className="trainerChoose">
                    <div className="trainerWoman">
                        <img src={woman} />
                        <h3>Find your trainer</h3>
                        <input type="text" placeholder="search by your city or zip code" />
                    </div>
                    <div className="trainerMan">
                        <img src={man} />
                        <h3>Find your physo</h3>
                        <input type="text" placeholder="search by your city or zip code" />
                    </div>
                </div>
            </div>
        </div>
    )
}