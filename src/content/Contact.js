import React, { Component } from 'react'
import Social from '../components/Social'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email':'maksim.bahdanchyk@polimi.it',
            'phone':'+393884019910',
            'instagram':'mbogdanchik'
        }
    }
    render(){
        return(
            <div class='condiv'>
                <h1> Contact me </h1>
                <h4> Email: {this.state.email} </h4>
                <h4> Phone: {this.state.phone} </h4>
                <h4> Instagram: {this.state.instagram} </h4>
                <Social/>
            </div>
        )
    }
}

export default Contact