import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from '../../services/ProductService';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const EditProduct = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        ProductService.getProduct(productId)
            .then(res => setProduct(res))
    }, []);

    const handleTitleChange = (e) => {product.title = (e.target.value)}
    const handleManufacturerChange = (e) => {product.manufacturer = (e.target.value)}
    const handlePriceChange = (e) => {product.sprice = parseInt(e.target.value)}
    const handleCostChange = (e) => {product.cost = parseInt(e.target.value)}
    const handleStockChange = (e) => {product.stock = parseInt(e.target.value)}
    const handleSoldChange = (e) => {product.sold = parseInt(e.target.value)}

    const navigateDashboard = () => navigate("/dashboard")

    const handleUpdateProductSubmit = (e) => {
        e.preventDefault();
        ProductService.updateProduct(product)
        .then(setTimeout(navigateDashboard, 1000))
        .then(toast.info("Product Updated"))
    }

    const handleDeleteProduct = (e) => {
        e.preventDefault();
        ProductService.deleteProduct(productId)
        .then(alert("Product Deleted"))
        .then(navigate("/dashboard"));
    }

    if (product === null) {
        return ( <div>Loading...</div>)
    }

    return (
        <div className='parent-container'>
            <div className='child-container'>
                <form className="styled-form" onSubmit={handleUpdateProductSubmit}>
                    <div>
                        <label>Product title:</label>
                        <input type="text" defaultValue={product?.title} onChange={handleTitleChange} required/>
                    </div>
                    <div>
                        <label>Manufacturer:</label>
                        <input type="text" defaultValue={product?.manufacturer} onChange={handleManufacturerChange} required/>
                    </div>
                    <div>
                        <label>Sale Price:</label>
                        <input type="number" defaultValue={product?.price} onChange={handlePriceChange} required/>
                    </div>
                    <div>
                        <label>Cost:</label>
                        <input type="number" defaultValue={product?.cost} onChange={handleCostChange} required/>
                    </div>
                    <div>
                        <label>Stock:</label>
                        <input type="number" defaultValue={product?.stock} onChange={handleStockChange} required/>
                    </div>
                    <div>
                        <label>Sold:</label>
                        <input type="number" defaultValue={product?.sold} onChange={handleSoldChange} required/>
                    </div>
                    <input type="submit" value="Update Product"/>
                </form>
                <button className='delete-button' onClick={handleDeleteProduct}><MdDeleteForever className='icon'/>Delete Product</button>
            </div>
    </div>
    )
}

export default EditProduct