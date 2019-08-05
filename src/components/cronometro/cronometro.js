import React, { Component } from 'react';
import "./cronometro.css"


class Cronometro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
            botao: 'Iniciar'
        }
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai() {

        let state = this.state;

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ botao: "Retomar" })
        } else {
            this.timer = setInterval(() => {
                state.timer += 0.1;
                state.botao = "Pausar"
                this.setState(state)
            }, 100)

        }
    }

    limpar() {
        let state = this.state;

        if(this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        this.setState({ timer: 0, botao: "Iniciar" })
    }

    render() {
        return (
            <div className="container">
                <img src={require('../../assets/cronometro.png')} className="img" />
                <a className="timer">{this.state.timer.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>
                </div>
            </div>
        )
    }
}

export default Cronometro;