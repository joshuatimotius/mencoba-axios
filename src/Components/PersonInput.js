import React from 'react';
import axios from 'axios';
import LoaderHOC from '../HOC/LoaderHOC';
import { Button, DialogContainer } from 'react-md';

class PersonInput extends React.Component {
    state = {
        negara: '',
        kota: '',
        visible: false
    };


    show = () => {
        this.setState({ visible: true })
    }

    hide = () => {
        this.setState({ visible: false })
    }

    handleNegaraChange = (value) => {
        this.setState({
            negara: value
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

        const { visible } = this.state;
        const actions = [];
        actions.push({secondary: true, children: 'Cancel', onClick: this.hide});
        // actions.push(<Button flat primary type='submit' onClick={this.hide} >submit</Button>)

        return (
            <div>
                <Button raised onClick={this.show}>Input Form</Button>
                <DialogContainer id='simple-action-dialog'visible={visible} onHide={this.hide} actions={actions} title='Form Input' onSubmit={this.handleSubmit}>
                    <form>
                        <div>
                            <label>Negara : </label>
                            <input
                                type='text'
                                onChange={(e) => this.handleNegaraChange(e.target.value)}
                                value={this.props.negara}
                            /> 
                        </div>
                        <div>
                            <label>Kota : </label>
                            <input
                                type='text'
                                onChange={(e) => this.handleKotaChange(e.target.value)}
                                value={this.props.kota}
                            />
                        </div>
                        <Button flat primary type='submit' onClick={this.hide}>submit</Button>
                    </form>
                </DialogContainer>
            </div>
        )
    }
}
// connect(<global state>,)
export default LoaderHOC(PersonInput);