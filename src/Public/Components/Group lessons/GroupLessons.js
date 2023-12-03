import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GroupCards from "./GroupCards";
import GroupHero from "./GroupHero";
import GroupInfo from "./GroupInfo";
import GroupSocialMedia from "./GroupSocialMedia";
import Orangebar from '/Users/daniel/Desktop/CentralStrength Gym/CentralStrength-Gym-1/src/Public/Components/Multipage component/Orangebar/Orangebar.js'

export default function Grouplessons(){
    return(
        <>
            <Header />
            <GroupHero />
            <GroupCards />
            <GroupInfo />
            <GroupSocialMedia />
            <Orangebar />
            <Footer />
        </>
    )
}