import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Supporthero from "./SupportHero";
import SupportInfo from "./SupportInfo";
import SupportTrainers from "./SupportTrainers";
import Orangebar from '/Users/daniel/Desktop/CentralStrength Gym/CentralStrength-Gym-1/src/Public/Components/Multipage component/Orangebar/Orangebar.js'

export default function Support(){
    return(
        <>
        <Header/>
        <Supporthero />
        <SupportTrainers />
        <SupportInfo />
        <Orangebar />
        <Footer />
        </>
    )
}