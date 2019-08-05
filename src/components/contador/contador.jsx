import React, { Component } from 'react'

class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar () {
        // let novoContador = this.state.contador + 1;
        
        let state = this.state
        state.contador += 1;

        this.setState({
            state
        })
    }

    diminuir () {
        let novoContador = this.state.contador - 1
        this.setState({
            contador: novoContador
        })
    }

    render() {
        return (
            <div>
                <h1> Contador </h1>
                <br />
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}

export default Contador;