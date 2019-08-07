import React, { Component } from 'react';
import './style.css'
//https://sujeitoprogramador.com/rn-api/?api=posts

class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nutri: [],

        }
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
        fetch(url)
        .then((r) => r.json())
        .then((json)=>{
            let state = this.state;
            state.nutri = json;
            this.setState(state)

            console.log(state)
        })
    }

    render() {
        return (
            <div className="container">
                <header>
                    <strong> React Nutri</strong>
                </header>

                {this.state.nutri.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo"> {item.titulo} </strong>
                            <img className="img" src={item.capa} />
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao" href={item.url}>Acessar</a>
                        </article>
                    );
                })}

            </div>
        );
    }
}

export default API;