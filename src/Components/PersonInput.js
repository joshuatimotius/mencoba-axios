import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../redux/action';

class PersonInput extends React.Component {
    state = {
        negara: '',
        kota: ''
    };

    handleNegaraChange = (value) => {
        this.setState({
            negara:value
        })
    }

    handleKotaChange = (value) => {
        this.setState({
            kota: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const user = {
            negara: this.state.negara,
            kota: this.state.kota
        }

        axios.post('http://localhost:9000/posts', user)
            .then(res => {
                console.log(res);
                console.log(res.data);

                this.props.action.pushItem(res.data);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Negara</label>
                    <input
                        type='text'
                        onChange={(e) => this.handleNegaraChange(e.target.value)}
                        value={this.props.negara}
                    />
                </div>
                <div>
                    <label>Kota</label>
                    <input
                        type='text'
                        onChange={(e) => this.handleKotaChange(e.target.value)}
                        value={this.props.kota}
                    />
                </div>

                <button type='submit'>submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action : bindActionCreators(action, dispatch)
    }
}

// connect(<global state>,)
export default connect(mapStateToProps, mapDispatchToProps)(PersonInput);