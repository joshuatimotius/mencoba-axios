import React from 'react';
import axios from 'axios';

class PersonInput extends React.Component {
    state = {
        negara: '',
        kota: ''
    };

    handleNegaraChange = (event) => {
        this.setState({
            negara: event.target.value
        })
    }

    handleKotaChange = (event) => {
        this.setState({
            kota: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            negara: this.state.negara,
            kota: this.state.kota
        };

        /*const kota = {
            kota: this.state.kota
        };*/

        axios.post('http://localhost:9000/posts', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <form>
                <div onSubmit={this.handleSubmit}>
                    <label>Negara</label>
                    <input type='text' value={this.state.negara} onChange={this.handleNegaraChange}/>
                </div>
                <div>
                    <label>Kota</label>
                    <input type='text' value={this.state.kota} onChange={this.handleKotaChange}/>
                </div>
                <button type='submit'>submit</button>
            </form>
        )
    }
}

export default PersonInput;