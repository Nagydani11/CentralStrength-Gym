import React from "react"
import Header from "../Header/Header"
import Whycentralcardsone from "./Whycentralcardsone"
import Whycentralcardstwo from "./Whycentralcardtwo"
import WhycentralHero from "./WhycentralHero"
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
        </>
    )
}