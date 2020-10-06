import React, { Component } from 'react'
import profilepic from '../img/ico.jpg'
import Social from "../components/Social";
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render(){
        return(
            <div class = 'condiv home'>
                <img src={ profilepic } alt="profilepic"/>
                <ReactTypingEffect className="typingeffect" text={['I am Maksim Bahdanchyk','I am a specialist in electrochemistry']} speed={100} eraseDelay={700}/>
                <Social />
            </div>

        )
    }
}
export default Home