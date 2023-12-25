import React from "react";
import Myappnav from "../Header/Myappnav";
import Visitsdata from "./Visitsdata";
import Visitshero from "./Visitshero";

export default function Visits(){
    return(
        <>
            <Myappnav />
            <Visitshero />
            <Visitsdata />
        </>
    )
}