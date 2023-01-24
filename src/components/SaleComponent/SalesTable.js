import React from "react";
import "../../styles/Table.css";
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';

const SalesTable = ({ sales }) => {
    const tableItems = sales.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>£ {item.price}</td>
                <td>{item.staff}</td>
                <td>{item.date}</td>
                <td><Link to={`/sale/${item._id}`}><FaEdit /></Link></td>
            </tr>
        )
    });

    return (
        <div className="child-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Payment</th>
                        <th>Staff</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        </div>
    )
}

export default SalesTable;
