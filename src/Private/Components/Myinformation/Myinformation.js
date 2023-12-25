import React from "react";
import Myappnav from "../Header/Myappnav";
import Myinformationdata from "./Myinformationdata";
import Myinformationhero from "./Myinformationhero";
import Myinformationmanagement from "./Myinformationmanagemant";
import Myinformationpayments from "./Myinformationpayments";

export default function Myinformation(){
    return(
        <>
            <Myappnav />
            <Myinformationhero />
            <Myinformationdata />
            <Myinformationpayments />
            <Myinformationmanagement />
        </>
    )
}