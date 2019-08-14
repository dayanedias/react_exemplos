import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'teste@teste.com.br',
            password: '',
            sexo: 'Masculino'
        }
    }
    render() {
        return (
            <div>
                <h2>Login </h2>
                Email:
                <input type="email" name="email" value={this.state.email} 
                onChange={(e) => this.setState({ email: e.target.value }) } /> <br/>
                Senha:
                <input type="password" name="senha" value={this.state.password} 
                onChange={(e) => this.setState({ password: e.target.value })}/> <br/>
                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={(e) => this.setState({ sexo: e.target.value })}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>

            </div>
        );
    }
}

export default Form;