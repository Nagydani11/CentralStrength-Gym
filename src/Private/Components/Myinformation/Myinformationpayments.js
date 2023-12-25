import React from "react";

export default function Myinformationpayments(){
    return(
        <div className="informationpaymentswrap">
            <h3>Payments information</h3>
            <div className="paymentsdata">
                <p>IBAN</p>
                <p>5772</p>
            </div>
            <hr></hr>
            <div className="paymentsdata">
                <p>Account Holder</p>
                <p>Daniel Nagy</p>
            </div>
            <a href="#">Change data</a>
        </div>
    )
}