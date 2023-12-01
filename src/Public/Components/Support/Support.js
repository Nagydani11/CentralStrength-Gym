import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Supporthero from "./SupportHero";
import SupportInfo from "./SupportInfo";
import SupportTrainers from "./SupportTrainers";

export default function Support(){
    return(
        <>
        <Header/>
        <Supporthero />
        <SupportTrainers />
        <SupportInfo />
        <Footer />
        </>
    )
}