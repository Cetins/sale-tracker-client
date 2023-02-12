import React from "react";

const SelectProduct = ({ products, handleProductChange }) => {

    const productOptions = products?.map((product, index) => {
        return <option key={product._id} value={index}>{product.title}</option>
    })
    
    return (
        <select onChange={handleProductChange} required>
            <option></option>
            {productOptions}
        </select>
    )
}

export default SelectProduct;