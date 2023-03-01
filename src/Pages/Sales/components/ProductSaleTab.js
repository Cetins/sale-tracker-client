import React from "react";
import '../../../styles/Tabs.css';
import SelectProduct from './SelectProduct';
import SelectStaff from "./SelectStaff";
import ProductInfo from "./ProductInfo";
import { toast } from 'react-toastify';

const ProductSaleTab = ({ 
    shop,
    employee,
    product,
    date,
    addSale,
    updateStock,
    handleProductChange,
    handleEmployeeChange,
    handleDateChange }) => {

    const handleProductSaleSubmit = () => {
        if (product.stock === 0) {
            toast.error(`Sorry you don't seem to have any stock left on ${product.title}`)
        }

        addSale({
            shop_id: shop._id,
            category: "Product",
            employee: employee.username,
            employee_id: employee._id,
            product: product.title,
            product_id: product._id,
            price: product.price,
            date: date
        });
        updateStock();
        toast.info('New sale added successfully');
    }
    
    return (
        <div className="SecondTab">
            <form className="styled-form" onSubmit={handleProductSaleSubmit}>
                <div>
                    <label>Staff:</label>
                    <SelectStaff employees={shop.employees} handleEmployeeChange={handleEmployeeChange} />
                </div>
                <div>
                    <label>Product:</label>
                    <SelectProduct products={shop.products} handleProductChange={handleProductChange} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" onChange={handleDateChange} />
                </div>
                <input type="submit" value="Submit Sale"/>
            </form>
            {product && (
                <ProductInfo product={product} />
            )}
        </div>
    );
};

export default ProductSaleTab;