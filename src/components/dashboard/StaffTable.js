import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StaffTable = ({ staff, sales }) => {

    const sumByEmployeeIdAndCategory = (sales, staffId, category) => {
        return sales.reduce((acc, sale) => {
            if (sale.staffId === staffId && sale.category === category) {
                acc += sale.price;
            }
            return acc;
        }, 0);
    }
    
    const tableItems = staff.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{sumByEmployeeIdAndCategory(sales, item._id, "service")}</td>
                <td>{sumByEmployeeIdAndCategory(sales, item._id, "product")}</td>
                <td><Link to={`/staff/${item._id}`}><FaEdit /></Link></td>
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