import React, { Component } from 'react'

class Wildcard extends Component{
    render(){
        return(
            <div class='wildcard'>
                <div class='comdet'>
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.where}</h4>
                    <h4>{this.props.from}-{this.props.from}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores provident rerum tempore. Dolorem modi nam necessitatibus quidem quo suscipit vitae! Accusamus accusantium ad, aliquid aperiam commodi dicta distinctio dolores doloribus eius error eum expedita fugiat laborum maiores nisi non optio placeat provident quod rem saepe sint soluta vero voluptas voluptate.</p>
                </div>

            </div>
        )
    }
}

export default Wildcard