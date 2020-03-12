import React from 'react';
import axios from 'axios';
import { DataTable, TableHeader, TableRow, TableColumn, TableBody } from 'react-md';
import LoaderHOC from '../HOC/LoaderHOC';

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

export default LoaderHOC(PersonList);