import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.delete = this.delete.bind(this);
    }

    delete (key) {
        this.props.delete(key)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.lista.map((item) => {
                        return (
                            <div className="row" key={item.key}>
                                <li>{item.text}</li>
                                <button onClick={ () => this.delete(item.key)}>delete</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoItems;