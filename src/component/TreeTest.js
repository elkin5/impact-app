import React, { Component } from 'react'

/* class TreeTest extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            saludo : this.props.saludo
        }
        console.log(this.state.saludo);
    }

    render() {
        return (
            <div>
                <h1>{this.state.saludo}</h1>
            </div>
        )
    }
} */

const TreeTest = ({ saludo }) => (
    <div>
                <h1>{saludo}</h1>
            </div>
);

export default TreeTest;
