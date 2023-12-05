import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import Bicycle from "../Multipage component/Bicycle/Bicycle";
import Goforit from "../Multipage component/Goforit/Goforit";
import Orangebar from "../Multipage component/Orangebar/Orangebar";
import Trainhero from "./Trainhero";
import Traininfo from "./Traininfo";

export default function Train(){
    return(
        <>
            <Header />
            <Trainhero />
            <Traininfo />
            <Goforit />
            <Bicycle />
            <Orangebar />
            <Footer />
        </>
    )
}