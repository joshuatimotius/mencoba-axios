import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://localhost:9000/posts')
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    };

    render() {
        return (
            <ul>
                {this.state.persons.map(
                    person =>
                        <li key={person._id}>{person.kota}</li>
                )}
            </ul>
        )
    }
};

export default PersonList;