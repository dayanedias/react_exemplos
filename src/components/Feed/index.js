import React, { Component } from 'react';
import data from '../../data/data.json';

class Feed extends Component {

    constructor(props) {
        super(props)

        this.state = data
    }

    render() {
        return (
            <div>
                <h2>Membros</h2>
                {this.state.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Profissão: {item.cargo}</p>
                            <p> {item.comentarios > 1 ? 'Comentários: ' + item.comentarios : 'Comentário: ' + item.comentarios} 
                            {item.likes > 1 ? ' / Curtidas: ' + item.likes : ' / Curtida: ' + item.likes } </p>
                            <hr/>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Feed;