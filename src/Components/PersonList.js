import React from 'react';
import axios from 'axios';
import { DataTable, TableHeader, TableRow, TableColumn, TableBody } from 'react-md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../redux/action';

class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://localhost:9000/posts?limit=20')
            .then(res => {
                this.setState({
                    persons: res.data
                })
                this.props.action.initData(res.data)
            })
    };

    render() {
        const { persons } = this.state;

        const ListNegara = persons.length ? (
            this.props.data.map(person => {
                return (
                    <div className="post card" key={person._id}>
                        <div className="card-content">
                            <span className="card-title">{person.negara}</span>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No Posts yet</div>
            )

        const ListKota = persons.length ? (
            persons.map(person => {
                return (
                    <div className="post card" key={person._id}>
                        <div className="card-content">
                            <span className="card-title">{person.kota}</span>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No Posts yet</div>
            )

        return (
            <DataTable plain>
                <TableHeader>
                    <TableRow>
                        <TableColumn>Negara</TableColumn>
                        <TableColumn>Kota</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.data.map((item, i) => (
                        <TableRow key={i}>
                            <TableColumn>{item.negara}</TableColumn>
                            <TableColumn>{item.kota}</TableColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </DataTable>
            /*<ul>
                {this.state.persons.map(
                    person =>
                        <li key={person._id}>{person.negara}</li>
                )}
            </ul>*/
        )
    }
};

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action : bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);