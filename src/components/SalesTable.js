import React from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css"

// add route to the app.js for sale editing

const SalesTable = ({ sales }) => {
    const tableItems = sales.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>£ {item.price}</td>
                <td>{item.staff}</td>
                <td>{item.date}</td>
                <td><Link to="/">edit</Link></td>
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
