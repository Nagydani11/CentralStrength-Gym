import React from "react";
import '../Orangebar/orangebar.css';

export default function Orangebar(){
    return(
        <div className="orangebar">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="orangebarwrap">
                <ul>
                    <li><span class="material-symbols-outlined">deployed_code</span></li>
                    <li><span class="material-symbols-outlined">deployed_code</span></li>
                    <li><span class="material-symbols-outlined">deployed_code</span></li>
                </ul>
            </div>
        </div>
    )
}