import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './content/Home.js'
import About from './content/About.js'
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
                <Route exact path='/about'>
                    <Education />
                </Route>
          </div>
        </Router>
    )
  }
export default App