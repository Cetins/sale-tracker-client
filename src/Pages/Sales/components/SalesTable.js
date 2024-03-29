import React, { useState } from "react";
import "../../../styles/Table.css";
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const SalesTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(10);


    // sort by date, newest first
    function compare( a, b ) {
        if ( a.date > b.date ) { return -1 }
        if ( a.date < b.date ) { return 1 }
        return 0;
    }

    data.sort( compare );

    const tableItems = data.map(item => {
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

    // slice the data to show only current page data
    const currentData = tableItems.slice(currentPage * perPage, (currentPage + 1) * perPage);

    // handle pagination
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        const totalPages = Math.ceil(tableItems.length / perPage);
        if (currentPage < (totalPages - 1)) {
            setCurrentPage(currentPage + 1)
        }
    }

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
                    {currentData}
                </tbody>
            </table>
            <button onClick={prevPage}><FaArrowAltCircleLeft className="icon"/></button>
            <span>{currentPage + 1}</span>
            <button onClick={nextPage}><FaArrowAltCircleRight className="icon"/></button>
        </div>
    )
}

export default SalesTable;
