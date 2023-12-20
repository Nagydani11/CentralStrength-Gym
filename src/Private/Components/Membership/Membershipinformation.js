import React from "react";

export default function Membershipinformation(){
    return(
        <div className="contractinformationwrap">
            <h2>Contract information</h2>
            <p>Your membership will extend automatically each 4 weeks. You can cancel at any time with 4 weeks.</p>
            <div className="memberinfo">
                <p>Contract period</p>
                <p>4 weeks</p>
            </div>
            <hr></hr>
            <div className="memberinfo">
                <p>Start date</p>
                <p>10.11.2023</p>
            </div>
            <hr></hr>
            <div className="memberinfo">
                <p>Next payment</p>
                <p>05.01.2024</p>
            </div>
            <p>If you cancel your membership now your contract will end on 14.1.2024</p>
            <h3>Membership details</h3>
            <div className="memberinfo">
                <p>Membership</p>
                <p>Comfort</p>
            </div>
            <hr></hr>
            <div className="memberinfo">
                <p>Price</p>
                <p>34.89 per 4 weeks</p>
            </div>
            <hr></hr>
            <div className="memberinfo">
                <p>Membership number</p>
                <p>426014645</p>
            </div>
        </div>
    )
}