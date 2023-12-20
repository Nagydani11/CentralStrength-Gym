import React from "react";

export default function Membershipaccess(){
    return(
        <div className="membershipaccesswrap">
            <h2>Club access</h2>
            <p>Scan your QR code at the gate to access the club. Check here on which device you are currently using the QR code. You can change the device you want to use the QR code on 2 times per month.</p>
            <div className="accessinfo">
                <p>Current access method</p>
                <p>QR code</p>
            </div>
            <hr></hr>
            <div className="accessinfo">
                <p>Device</p>
                <p>Iphone14</p>
            </div>
            <a href="#">Remove device</a>
        </div>
    )
}