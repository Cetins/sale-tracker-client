import React from "react";
import SubTitle from "../SubTitle";
import ProductsTable from "../ProductsTable";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
    const stockTotal = products.reduce((total, product) => total + (product.cost * product.stock) , 0);
    const stockTitle = `Net Stock Cost is £ ${(Math.round(stockTotal * 100) / 100).toFixed(2)}`

    return (
        <div className="child-container">
            <SubTitle title="Products"/>
            <ProductsTable products={products} stockTotal={stockTotal}/>
            <SubTitle title={stockTitle}/>
            <button><Link to="/product-new">add product</Link></button>
        </div>
    )
}

export default Products;