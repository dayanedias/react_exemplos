import React, { Component } from 'react';

class Continuando extends Component {

    constructor(props) {
        super(props);
        this.state = {

            hora: '00:00:00'

        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        },1000);
    }

    componentDidUpdate() {
        console.log("Atualizou!")

    }

    // shouldComponentUpdate() {
    //     //Retorna true or false para comparar states e etc
    // }

    render (){
        return(
            <div>
                <h1> Projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default Continuando;