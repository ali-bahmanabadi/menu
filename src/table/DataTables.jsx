import * as React from 'react';

import 'jquery/dist/jquery.min.js';

import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

import $ from 'jquery';

import './css.css';

import axios from 'axios';
import { Link } from 'react-router-dom';

// componentDidMount => useEffect

class Datatbales extends React.Component {
    // const [modal, setModal] = React.useState(false);
    // console.log(modal);

    handler = () => {
        console.log(true);
    };
    // this.state({

    // })

    componentDidMount() {
        $(document).ready(function () {
            setTimeout(function () {
                var table = $('#example').DataTable({
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
                        {
                            data: null,
                            // render: () => `ali`,
                        },
                    ],
                    columnDefs: [
                        {
                            targets: -1,
                            // data: null,
                            // defaultContent: '<button>Click!</button>',
                            render: (data, type, row) => {
                                return `
                                        <button class="delete">Delete</button>
                                        <button class="edit">edit</button>
                                    `;
                            },
                            // createdCell: (td, cellData, rowData, row, col) =>
                            //     React.ReactDOM.render(
                            //         <a onClick={() => console.log('hello')}>
                            //             <i className="icon-fontello-edit"></i>
                            //         </a>,
                            //         td
                            //     ),
                        },
                    ],
                    // paging: false,
                    retrieve: true,
                });

                $('#example tbody').on('click', '.delete', function () {
                    var data = table.row($(this).parents('tr')).data();
                    // alert(data[0] + "'s salary is: " + data[5]);
                    console.log('delete: ', data.first_name);
                });

                $('#example tbody').on('click', '.edit', function () {
                    var data = table.row($(this).parents('tr')).data();
                    // alert(data[0] + "'s salary is: " + data[5]);
                    console.log('edit: ', data);
                });
            }, 1000);
        });
    }

    render() {
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }
}
export default Datatbales;
