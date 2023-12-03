import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GroupCards from "./GroupCards";
import GroupHero from "./GroupHero";
import GroupInfo from "./GroupInfo";
import GroupSocialMedia from "./GroupSocialMedia";

export default function Grouplessons(){
    return(
        <>
            <Header />
            <GroupHero />
            <GroupCards />
            <GroupInfo />
            <GroupSocialMedia />
            <Footer />
        </>
    )
}