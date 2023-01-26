import React from "react";
import '../../styles/Tabs.css';
import SelectProduct from './SelectProduct';
import SelectStaff from "./SelectStaff";
import ProductInfo from "./ProductInfo";

const ProductSaleTab = ({ 
    staff,
    products,
    staffMember,
    product,
    date,
    addSale,
    updateStock,
    handleProductChange,
    handleStaffMemberChange,
    handleDateChange }) => {

    const handleProductSaleSubmit = () => {
        if (product.stock === 0) {
            alert(`Sorry you don't seem to have any stock left on ${product.title}`)
        }
        addSale({
            category: "product",
            title: product.title,
            productId: product._id,
            price: product.price,
            staff: staffMember.name,
            staffId: staffMember._id,
            date: date
        });
        updateStock();
        window.alert('New sale added successfully');
    }
    
    return (
        <div className="SecondTab">
            <form className="styled-form" onSubmit={handleProductSaleSubmit}>
                <div>
                    <label>Staff:</label>
                    <SelectStaff staff={staff} handleStaffMemberChange={handleStaffMemberChange} />
                </div>
                <div>
                    <label>Product:</label>
                    <SelectProduct products={products} handleProductChange={handleProductChange} />
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