import React from "react";
import '../../../styles/Tabs.css';
import SelectProduct from './SelectProduct';
import SelectStaff from "./SelectStaff";
import ProductInfo from "./ProductInfo";
import { toast } from 'react-toastify';
import SelectPayment from "./SelectPayment";

const ProductSaleTab = ({ 
    shop,
    employee,
    product,
    payment,
    date,
    addProductSale,
    updateStock,
    handleProductChange,
    handleEmployeeChange,
    handlePaymentChange,
    handleDateChange }) => {

    const handleProductSaleSubmit = () => {
        if (product.stock === 0) {
            toast.error(`Sorry you don't seem to have any stock left on ${product.title}`)
        }

        addProductSale({
            shop_id: shop._id,
            employee_id: employee._id,
            product_id: product._id,
            employee: employee.full_name,
            category: "Product",
            title: product.title,
            price: product.price,
            payment_method: payment,
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
                    <label>Payment Method:</label>
                    <SelectPayment paymentMethods={shop.payment_methods} handlePaymentChange={handlePaymentChange} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="datetime-local" onChange={handleDateChange} />
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