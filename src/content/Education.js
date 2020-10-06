import React, { Component } from 'react'
import Wildcard from "../components/Wildcard";
class Education extends Component {
    render(){
        return(
            <div className='condiv'>
                <h1>My Education</h1>
                <Wildcard title='Specialist'  where='BNTU' from='2009' to='2014'></Wildcard>
                <Wildcard title='MSc'  where='Polimi' from='2015' to='2017'></Wildcard>
                <Wildcard title='PhD'  where='Polimi' from='2018' to='2021'></Wildcard>
            </div>
        )
    }
}
export default Education