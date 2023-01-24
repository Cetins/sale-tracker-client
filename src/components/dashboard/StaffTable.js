import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StaffTable = ({ staff }) => {
    const tableItems = staff.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.sales}</td>
                <td>{item.service_commission}</td>
                <td>{item.product_commission}</td>
                <td><Link to={`/staff/${item._id}`}><FaEdit /></Link></td>
            </tr>
        )
    })
    return (
        <table className='styled-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Total Sales</th>
                    <th>Service %</th>
                    <th>Product %</th>
                </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    )
}

export default StaffTable