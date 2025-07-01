import { useState } from 'react'
import Ejercicio1_1 from './Components/Tema1/Ejercicio1_1'
import Ejercicio1_2 from './Components/Tema1/Ejercicio1_2'
import Ejercicio1_3 from './Components/Tema1/Ejercicio1_3'
import Reloj from './Components/Tema1/reloj'
//tema2
import Header from './Components/Tema 2/Ejercicio 1/Header'
import About from './Components/Tema 2/Ejercicio 1/About'
import Contact from './Components/Tema 2/Ejercicio 1/Contact'
import Footer from './Components/Tema 2/Ejercicio 1/Footer'

import Navbar from './Components/Tema 2/Ejercicio 2/NavBar'
import SocialLink from './Components/Tema 2/Ejercicio 2/SocialLinks'
import SkillBadge from './Components/Tema 2/Ejercicio 2/SkillBadge'
import ProjectCard from './Components/Tema 2/Ejercicio 2/ProjectCard'
//tema3
import Ejercicio3_1 from './Components/Tema3/Ejecicio3_1'
import Ejercicio3_2 from './Components/Tema3/Ejercicio3_2'
//teama 4
import Gallery from './Components/Tema4/Ejecicio4_1/Gallery'
import MenuItem from './Components/Tema4/Ejercicio4_2/MenuItem'
//Tema5
import Ejecicio5_1 from './Components/Tema5/Ejercicio 5_1/Ejecicio5_1'
import Ejercicio5_2 from './Components/Tema5/Ejeccicio5_2/Ejercicio5_2'
function App() {
 

  return (
    <>
      <div>
        <h1><strong>-----------------Tema 1-----------------</strong></h1>
          <Ejercicio1_1/>
          <Ejercicio1_2/>
          <Ejercicio1_3/>
            <Reloj/>
     <h1><strong>-----------------Tema 2.1-----------------</strong></h1>
          <Header/>
          <About/>
          <Contact/>
          <Footer/>
        
         <h1><strong>-----------------Tema2.2-----------------</strong></h1>
            <Navbar/>
            <ProjectCard/>
            <SkillBadge/>
            <SocialLink/>
          <h1><strong>-----------------Tema3.1----------------</strong></h1>
            <Ejercicio3_1/>
            <Ejercicio3_2/>
          <h1><strong>-----------------Tema4----------------</strong></h1>
            <Gallery/>
          <h1><strong>-----------------Tema4.2----------------</strong></h1>
            <MenuItem/>
          <h1><strong>-----------------Tema5.1----------------</strong></h1>
             <Ejecicio5_1/>
          <h1><strong>-----------------Tema5.2----------------</strong></h1>
              <Ejercicio5_2/>
        </div> 
    </>
  )
}

export default App
