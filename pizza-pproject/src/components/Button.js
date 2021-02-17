import React, { Component } from 'react';

class Button extends Component {
    constructor () {
       super () 
       this.state = {
           button: 'Order now' 
       }
    }
    changeButton() {
        this.setState({
            button: 'View shopping basket'
        })
    }
    render() {
    return (
    <div>
    <br />
    <button type="button" className="btn btn-info" style={{width: "300px", height: "100px" }} onClick = {() => this.changeButton()}><h4>{this.state.button}</h4></button>  
    </div>
    )

    }
}

export default Button;