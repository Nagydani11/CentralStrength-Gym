import React from "react"
import  "./styles/priceshero.css"

export default function PricesHero(){
    return(
        <div className="herowrap">
            <div className="hero">
                <div className="heroleft">
                    <h1>Central</h1>
                    <h1>strength</h1>
                    <h1>prices</h1>
                    <a href="#">Apply Now!</a>
                </div>
                <div className="heroright">
                    <h2>At basic fit:</h2>
                    <h3>Sport 5 weeks for free</h3>
                    <h3>Sportbag included</h3>
                </div>
            </div>
        </div>

    )
}