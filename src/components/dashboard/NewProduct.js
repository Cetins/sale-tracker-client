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
    const handlePriceChange = (e) => {setPrice(parseInt(e.target.value))}
    const handleCostChange = (e) => {setCost(parseInt(e.target.value))}
    const handleStockChange = (e) => {setStock(parseInt(e.target.value))}

    const handleNewProductSubmit = (e) => {
        e.preventDefault();
        ProductService.addProduct({
            title: title,
            manufacturer: manufacturer,
            price, price,
            cost: cost,
            stock: stock,
            sold: 0
        })
        .then(alert("New Product Added"))
        .then(navigate("/dashboard"));
    }

    return (
        <div className='parent-container'>
            <div className='child-container'> 
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
        </div>
    )
}

export default NewProduct