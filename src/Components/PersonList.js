import React from 'react';
import axios from 'axios';
import { DataTable, TableHeader, TableRow, TableColumn, TableBody } from 'react-md';
// import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md';

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
            <DataTable plain>
                <TableHeader>
                    <TableRow>
                        <TableColumn>Negara</TableColumn>
                        <TableColumn>Kota</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from(Array(1)).map((_, i) => (
                        <TableRow key={i}>
                            <TableColumn>{this.state.persons.map(
                                person =>
                                    <li>{person.negara}</li>
                            )}</TableColumn>
                            <TableColumn>{this.state.persons.map(
                                person =>
                                    <li>{person.kota}</li>
                            )}</TableColumn>
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

export default PersonList;