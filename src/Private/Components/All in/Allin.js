import React from "react";
import Myappnav from "../Header/Myappnav";
import Allinhero from "./Allinhero";
import Allininfo from "./Allininfo";
import Allinupgrade from "./Allinupgrade";

export default function Allin(){
    return(
        <>
            <Myappnav />
            <Allinhero />
            <Allininfo />
            <Allinupgrade />
        </>
    )
}