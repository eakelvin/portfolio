import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';
import Project from './Components/Project';

function App() {

  return (
    <div style={{backgroundColor: "#151515"}} className='text-light'>
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
      
    </div>
  )
}

export default App
