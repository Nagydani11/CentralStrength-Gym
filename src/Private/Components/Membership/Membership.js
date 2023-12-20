import React from "react";
import Myappnav from "../Header/Myappnav";
import Membershipaccess from "./Membershipaccess";
import Membershipcontract from "./Membershipcontract";
import Membershipcurrent from "./Membershipcurrent";
import Membershiphero from "./Membershiphero";
import Membershipinformation from "./Membershipinformation";

export default function Membership(){
    return(
        <>
            <Myappnav />
            <Membershiphero />
            <Membershipinformation />
            <Membershipaccess />
            <Membershipcontract />
            <Membershipcurrent />
        </>
    )
}