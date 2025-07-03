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
  
  const [activeTema, setActiveTema] = useState('Tema1'); // Solo guardamos el tema activo

  const activateTema = (tema) => {
    setActiveTema(tema);
  }
  

  return (
    <div>
      <button id="Tema1" onClick={() => activateTema('Tema1')}>
        {activeTema === 'Tema1' ? 'Ocultar Tema 1' : 'Mostrar Tema 1'}
      </button>
      <button id="Tema2" onClick={() => activateTema('Tema2')}>
        {activeTema === 'Tema2' ? 'Ocultar Tema 2' : 'Mostrar Tema 2'}
      </button>
      <button id="Tema3" onClick={() => activateTema('Tema3')}>
        {activeTema === 'Tema3' ? 'Ocultar Tema 3' : 'Mostrar Tema 3'}
      </button>
      <button id="Tema4" onClick={() => activateTema('Tema4')}>
        {activeTema === 'Tema4' ? 'Ocultar Tema 4' : 'Mostrar Tema 4'}
      </button>
      <button id="Tema5" onClick={() => activateTema('Tema5')}>
        {activeTema === 'Tema5' ? 'Ocultar Tema 5' : 'Mostrar Tema 5'}
      </button>

      {activeTema === 'Tema1' && (
        <div>
          <h1><strong>-----------------Tema 1-----------------</strong></h1>
          <div>
            <Ejercicio1_1 />
            <Ejercicio1_2 />
            <Ejercicio1_3 />
            <Reloj />
          </div>
        </div>
      )}

      {activeTema === 'Tema2' && (
        <div>
          <h1><strong>-----------------Tema 2-----------------</strong></h1>
          <div>
            <Header />
            <About />
            <Contact />
            <Footer />
          </div>
          <h1><strong>-----------------Tema2.2-----------------</strong></h1>
          <div>
            <Navbar />
            <ProjectCard />
            <SkillBadge />
            <SocialLink />
          </div>
        </div>
      )}

      {activeTema === 'Tema3' && (
        <div>
          <Ejercicio3_1 />
          <Ejercicio3_2 />
        </div>
      )}

      {activeTema === 'Tema4' && (
        <div>
          <h1><strong>-----------------Tema4----------------</strong></h1>
          <div>
            <Gallery />
          </div>
          <h1><strong>-----------------Tema4.2----------------</strong></h1>
          <div>
            <MenuItem />
          </div>
        </div>
      )}

      {activeTema === 'Tema5' && (
        <div>
          <h1><strong>-----------------Tema5.1----------------</strong></h1>
          <div>
            <Ejecicio5_1 />
          </div>
          <h1><strong>-----------------Tema5.2----------------</strong></h1>
          <div>
            <Ejercicio5_2 />
          </div>
        </div>
      )}
    </div>
  )
}

export default App