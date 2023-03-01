import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sumByEmployeeIdAndCategory from '../../../utils/sumByEmployeeIdAndCategory';

const StaffTable = ({ employees, sales }) => {

    const tableItems = employees.map(employee => {
        return (
            <tr key={employee._id}>
                <td>{employee.full_name}</td>
                <td>{employee.category}</td>
                <td>{sumByEmployeeIdAndCategory(sales, employee._id, "service")}</td>
                <td>{sumByEmployeeIdAndCategory(sales, employee._id, "product")}</td>
                <td><Link to={`/staff/${employee._id}`}><FaEdit /></Link></td>
            </tr>
        )
    })
    return (
        <table className='styled-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Service Sales Sum £</th>
                    <th>Product Sales Sum £</th>
                </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    )
}

export default StaffTable