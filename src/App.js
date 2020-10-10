import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './content/Home.js'
import About from './content/About.js'
import Education from './content/Education.js'
import Skills from './content/Skills'
import Contact from './content/Contact'
function App() {

    return(
        <Router>
          <div className='App'>
            <Navbar />
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/education'>
                    <Education />
                </Route>
                <Route exact path='/skills'>
                    <Skills />
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
          </div>
        </Router>
    )
  }
export default App