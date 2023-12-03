import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Goforit from "../Multipage component/Goforit/Goforit"
import Title from "../Multipage component/Title/Title"
import Orangebar from '/Users/daniel/Desktop/CentralStrength Gym/CentralStrength-Gym-1/src/Public/Components/Multipage component/Orangebar/Orangebar.js'
export default function Home(){
    return (
      <>
        <Title />
        <Header />
        <h1>Főoldal</h1>
        <Goforit />
        <Orangebar />
        <Footer />
      </>
      
    )
  }
  

  