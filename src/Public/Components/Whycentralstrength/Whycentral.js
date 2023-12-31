import React from "react"
import Header from "../Header/Header"
import Bicycle from "../Multipage component/Bicycle/Bicycle"
import Goforit from "../Multipage component/Goforit/Goforit"
import Orangebar from "../Multipage component/Orangebar/Orangebar"
import Whycentralcardsone from "./Whycentralcardsone"
import Whycentralcardstwo from "./Whycentralcardtwo"
import Whycentralextras from "./Whycentralextras"
import WhycentralHero from "./WhycentralHero"
import Whycentralinfo from "./Whycentralinfo"
import Whycentralpartone from "./Whycentralpart1"
import Whycentralparttwo from "./Whycentralpart2"


export default function Whycentral(){
    return(
        <>
            <Header />
            <WhycentralHero />
            <Whycentralpartone />
            <Whycentralcardsone />
            <Whycentralparttwo />
            <Whycentralcardstwo />
            <Whycentralinfo />
            <Whycentralextras />
            <Goforit />
            <Bicycle />
            <Orangebar />
        </>
    )
}