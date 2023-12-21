import React from "react";
import Myappnav from "../Header/Myappnav";
import Paymenthero from "./Paymentshero";
import Paymentsinfo from "./Paymentsinfo";
import Paymentsupcoming from "./Paymentsupcoming";

export default function Payments(){
    return(
        <>
            <Myappnav />
            <Paymenthero/>
            <Paymentsinfo />
            <Paymentsupcoming />
        </>
    )
}