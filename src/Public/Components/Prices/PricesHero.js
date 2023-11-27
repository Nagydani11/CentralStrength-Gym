import React from "react"
import pricesHeroImage from "./images/1.jpg"

export default function PricesHero(){
    return(
        <div className="hero">
            <img src={pricesHeroImage} />
            <h1>Central strength Prices</h1>
            <button>Apply Now!</button>
        </div>

    )
}