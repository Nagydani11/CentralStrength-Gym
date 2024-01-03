import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Priceingtable from "./Priceingtable";
import PricesHero from "./PricesHero";
import Pricesinfo from "./Pricesinfo";
import Orangebar from '../Multipage component/Orangebar/Orangebar'

export default function Prices(){
    return(
        <>
            <Header />
            <PricesHero />
            <Priceingtable />
            <Pricesinfo />
            <Orangebar />
            <Footer />
        </>
    )
}