import React from "react";
import "../../../styles/Table.css";
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';

const ServicesTable = ({ services }) => {
    const tableItems = services.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.duration} mins</td>
                <td>£ {item.price}</td>
                <td><Link to={`/service/${item._id}`}><FaEdit /></Link></td>
            </tr>
        )
    });

    return (
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
    )
}

export default ServicesTable;