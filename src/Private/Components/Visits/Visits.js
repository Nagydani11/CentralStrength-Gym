import React from "react";
import Myappnav from "../Header/Myappnav";
import Visitsdata from "./Visitsdata";
import Visitshero from "./Visitshero";
import Visitoverview from "./Visitsoverview";

export default function Visits(){
    return(
        <>
            <Myappnav />
            <Visitshero />
            <Visitsdata />
            <Visitoverview />
        </>
    )
}