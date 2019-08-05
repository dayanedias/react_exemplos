import React, { Component } from 'react';
import './biscoito.css';

class Biscoito extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frases: [
                'Frase 1',
                'Frase 2',
                'Frase 3',
                'Frase 4',
                'Frase 5',
                'Frase 6',
                'Frase 7',
                'Frase 8',
                'Frase 9',
                'Frase 10'
            ],
            textoFrase: "Frase aleatória",

        }
        this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * state.frases.length);
        state.textoFrase = '"'+ state.frases[numeroAleatorio] + '"';

        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <img src={require('../../assets/biscoito.png')} className="img" />
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
                <h3 className="textoFrase">Sorte do dia: {this.state.textoFrase} </h3>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}


export default Biscoito;