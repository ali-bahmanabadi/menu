import * as React from 'react';

import 'jquery/dist/jquery.min.js';

import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

import $ from 'jquery';

import './css.css';

import axios from 'axios';

// componentDidMount => useEffect

class Datatbales extends React.Component {
    // State array variable to save and show data
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        //Get all users details in bootstrap table
        // axios.post('https://jsonplaceholder.typicode.com/posts').then((res) => {
        //     //Storing users detail in state array object
        //     this.setState({ data: res.data });
        // });

        //initialize datatable
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable({
                    processing: true,
                    serverSide: true,
                    ajax: {
                        url: 'https://datatables.net/examples/server_side/scripts/post.php',
                        type: 'POST',
                    },
                    columns: [
                        { data: 'first_name' },
                        { data: 'last_name' },
                        { data: 'position' },
                        { data: 'office' },
                        { data: 'start_date' },
                        { data: 'salary' },
                    ],
                    // paging: false,
                    retrieve: true,
                });
            }, 1000);
        });
    }
    render() {
        //Datatable HTML
        return (
            <div className="MainDiv">
                <div className="jumbotron text-center">
                    <h3>Therichpost.com</h3>
                </div>

                <div className="container">
                    <table
                        id="example"
                        className="table table-hover table-bordered"
                    >
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }
}
export default Datatbales;
