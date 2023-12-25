import React from "react";

export default function Myinformationdata(){
    return(
        <div className="informationdatawrap">
            <h3>My information</h3>
            <div className="myinformationdata">
                <div className="data">
                    <p>Name</p>
                    <p>Daniel Nagy</p>
                </div>
                <hr></hr>
                <div className="data">
                    <p>Birth date</p>
                    <p>26.11.1997</p>
                </div>
                <hr></hr>
                <div className="data">
                    <p>Address</p>
                    <p>Ridder bexstraat 23</p>
                </div>
                <hr></hr>
                <div className="data">
                    <p>Post code</p>
                    <p>6444GL</p>
                </div>
                <hr></hr>
                <div className="data">
                    <p>City</p>
                    <p>Brunssum</p>
                </div>
                <hr></hr>
                <div className="data">
                    <p>Email</p>
                    <p>nagydani97@gmail.com</p>
                </div>
                <hr></hr>
                <div className="data">
                    <p>Telephone</p>
                    <p>36203862847</p>
                </div>
                <a href="#">Change data</a>
            </div>
        </div>
    )
}