import React from "react";
import "../styles/Table.css";
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';

const ProductsTable = ({ products }) => {

    const tableItems = products.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.manufacturer}</td>
                <td>£ {item.cost}</td>
                <td>£ {item.price}</td>
                <td>{item.stock}</td>
                <td><Link to={`/product/${item._id}`}><FaEdit /></Link></td>
            </tr>
        )
    });

    return (
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Manufacturer</th>
                        <th>Cost</th>
                        <th>Sale Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
    )
}

export default ProductsTable;