import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Goforit from "../Multipage component/Goforit/Goforit"
import Title from "../Multipage component/Title/Title"
import Orangebar from '../Multipage component/Orangebar/Orangebar'//'/src/Public/Components/Multipage component/Orangebar/Orangebar.js'
import Homeheader from "./Homehero"
import Homeclub from "./Homeclub"
import Homecards from "./Homecards"
import Homeapp from "./Homeapp"
import Homefaq from "./Homefaq"
import '../Home/styles/home.css'

export default function Home(){
    return (
      <>
        <Title />
        <Header />
        <Homeheader/>
        <Homeclub />
        <Homecards />
        <Homeapp/>
        <Homefaq />
        <Goforit />
        <Orangebar />
        <Footer />
      </>
      
    )
  }
  

  