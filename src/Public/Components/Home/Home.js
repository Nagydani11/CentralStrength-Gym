import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Goforit from "../Multipage component/Goforit/Goforit"
import Title from "../Multipage component/Title/Title"
import Orangebar from '/Users/daniel/Desktop/CentralStrength Gym/CentralStrength-Gym-1/src/Public/Components/Multipage component/Orangebar/Orangebar.js'
import Homeheader from "./Homehero"
import Homeclub from "./Homeclub"
import Homecards from "./Homecards"
import Homeapp from "./Homeapp"

export default function Home(){
    return (
      <>
        <Title />
        <Header />
        <Homeheader/>
        <Homeclub />
        <Homecards />
        <Homeapp/>
        <Goforit />
        <Orangebar />
        <Footer />
      </>
      
    )
  }
  

  