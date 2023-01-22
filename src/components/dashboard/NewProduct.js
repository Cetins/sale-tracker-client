import React, { useState } from 'react';
import ProductService from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';
import '../../styles/Form.css';

const NewProduct = () => {
    const [title, setTitle] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [price, setPrice] = useState();
    const [cost, setCost] = useState();
    const [stock, setStock] = useState();
    const navigate = useNavigate();

    const handleTitleChange = (e) => {setTitle(e.target.value)}
    const handleManufacturerChange = (e) => {setManufacturer(e.target.value)}
    const handlePriceChange = (e) => {setPrice(e.target.value)}
    const handleCostChange = (e) => {setCost(e.target.value)}
    const handleStockChange = (e) => {setStock(e.target.value)}

    const handleNewProductSubmit = () => {
        ProductService.addProduct({
            title: title,
            manufacturer: manufacturer,
            price, price,
            cost: cost,
            stock: stock
        })
        .then(alert("New Product Added"))
        .then(navigate("/dashboard"));
    }

    return (
        <div>
            <p>new product test</p>
            <form className="styled-form" onSubmit={handleNewProductSubmit}>
                    <div>
                        <label>Product title:</label>
                        <input type="text" onChange={handleTitleChange} required/>
                    </div>
                    <div>
                        <label>Manufacturer:</label>
                        <input type="text" onChange={handleManufacturerChange} required/>
                    </div>
                    <div>
                        <label>Sale Price:</label>
                        <input type="number" onChange={handlePriceChange} required/>
                    </div>
                    <div>
                        <label>Cost:</label>
                        <input type="number" onChange={handleCostChange} required/>
                    </div>
                    <div>
                        <label>Stock:</label>
                        <input type="number" onChange={handleStockChange} required/>
                    </div>
                    <input type="submit" value="Add Product"/>
                </form>
        </div>
    )
}

export default NewProduct