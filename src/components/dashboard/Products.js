import React from "react";
import SubTitle from "../SubTitle";
import ProductsTable from "./ProductsTable";
import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import { BsBasket } from 'react-icons/bs';

const Products = ({ products }) => {
    const stockTotal = products.reduce((total, product) => total + (product.cost * product.stock) , 0);
    const stockTitle = `Net Stock Cost is £ ${(Math.round(stockTotal * 100) / 100).toFixed(2)}`

    return (
        <div className="child-container">
            <h2 className="sub-title"><div><BsBasket className="icon"/></div> Products</h2>
            <ProductsTable products={products} stockTotal={stockTotal}/>
            <button><Link to="/product-new"><FaPlus className="icon"/>New Product</Link></button>
            <SubTitle title={stockTitle}/>
        </div>
    )
}

export default Products;