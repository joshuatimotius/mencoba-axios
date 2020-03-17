import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DataTable, TableHeader, TableRow, TableColumn, TableBody, TablePagination } from 'react-md';
import LoaderHOC from '../HOC/LoaderHOC';

// const headers = Array.from(Array(2)).map((item, i) => 'Column ${i+1}');
const data = Array.from(Array(100)).map((item, i) => ({
    key: i
}));

const rows = data.length;

class PersonList extends React.Component {
    state = {
        persons: [],
        query : {page: 1, limit: 5},
        total : 0
    }

    componentDidMount() {
       this.handleQuery();
    };

    static propTypes = {
        mobile: PropTypes.bool.isRequired,
    };

    handleQuery = () => {
        axios.get(`http://localhost:9000/posts?page=${this.state.query.page}&limit=${this.state.query.limit}`)
        .then(res => {
            this.setState({
                total : res.data.total
            })
            this.props.action.initData(res.data.posts)
            console.log(res.headers)
        })
    }

    handlePagination = (newStart, limit, page) => {
        let query = this.state.query;
        query.page = page;
        query.limit = limit;

        this.setState({ query }, this.handleQuery);
    }

    render() {
        const {page, limit} = this.state.query;
        const total = this.state.total;
        /*return (
            <DataTable baseId='simple-pagination'>
                <TableHeader>
                    <TableRow selectable={false}>
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
        )*/
        return (
            <DataTable baseId='simple-pagination'>
                <TableHeader>
                    <TableRow selectable={false}>
                        <TableColumn>Negara</TableColumn>
                        <TableColumn>Kota</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.data.map((item, i) => (
                        <TableRow key={i} selectable={false}>
                            <TableColumn>{item.negara}</TableColumn>
                            <TableColumn>{item.kota}</TableColumn>
                        </TableRow>
                    ))}
                </TableBody>
                <TablePagination rows={total} rowsPerPage={limit} page={page} onPagination={this.handlePagination}/>
            </DataTable>
        )
    }
};

export default LoaderHOC(PersonList);