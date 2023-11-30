import React from "react"
import pricesHeroImage from "./images/1.jpg"
import  "./styles/priceshero.css"

export default function PricesHero(){
    return(
        <div className="hero">
            <img src={pricesHeroImage} />
            <h1>Central strength Prices</h1>
            <a href="#">Apply Now!</a>
        </div>

    )
}