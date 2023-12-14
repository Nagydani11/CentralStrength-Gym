import React from "react";
import Myappnav from "../Header/Myappnav";
import Overviewapp from "./Overviewapp";
import Overviewcard from "./Overviewcards";
import Overviewinformation from "./Overviewinformation";
import Overviewquestion from "./Overviewquestion";
import Overviewvisit from "./Overviewvisits";
import Overviewwelcome from "./Overviewwelcome";

export default function Overview(){
    return(
        <>
            <Myappnav />
            <Overviewwelcome />
            <Overviewvisit />
            <Overviewinformation />
            <Overviewquestion />
            <Overviewcard />
            <Overviewapp />
        </>
    )
}