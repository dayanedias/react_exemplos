import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar() {
        const { nome, email, senha } = this.state;

        if (nome !== '' && email !== '' && senha !== '') {

            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);

        } else {
            alert("Erro!")
        }

        this.preventDefault();

        // console.log(nome);
        // console.log(email);
        // console.log(senha);

    }

    render() {
        return (
            <div>
                <h1> Novo Usuário </h1>

                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                    <input type="text" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
                    <label>Email: </label>
                    <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /> <br />
                    <label>Senha: </label>
                    <input type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default Form;