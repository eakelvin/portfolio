import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';
import Project from './Components/Project';
import Footer from './Components/Footer';

function App() {

  return (
    <div style={{backgroundColor: "#151515"}} className='text-light'>
        <Header />
        <About />
        <Skills />
        <Project />
        <section id='contact'>
          <Contact />
        </section>
        <Footer />
    </div>
  )
}

export default App
