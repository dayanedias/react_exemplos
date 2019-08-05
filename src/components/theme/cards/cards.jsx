import React, { Component } from 'react';
import { Card, Checkbox } from '@bayon/commons';


class CardExample extends Component {

    constructor(props) {
        super(props)
        this.state = {

            checked: false

        }
    }

    handleChange = () => {
        // debugger

        this.setState({
            checked: !this.state.checked
        })
        // console.log("Dentro do handle " + this.state.checked)

    }

    render() {
        return (
            <div className="row mx-3">
                <Checkbox size="medium"
                    onChange={() => this.handleChange()}
                    checked={this.state.checked}
                />
                {/* {console.log("Fora do handle " + this.state.checked)} */}
                { this.state.checked ? <Card style={{ height: '150px' }} selected /> : <Card style={{ height: '150px' }} />}
                
                 
            </div>
        )
    }
}

export default CardExample;