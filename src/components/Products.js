import React from "react";
import SubTitle from "./SubTitle"
import ProductsTable from "./ProductsTable"

const Products = ({ products }) => {
    const stockTotal = products.reduce((total, product) => total + (product.cost * product.stock) , 0);
    const stockTitle = `Net Stock Cost is £ ${(Math.round(stockTotal * 100) / 100).toFixed(2)}`

    return (
        <div className="child-container">
            <SubTitle title="Products"/>
            <ProductsTable products={products} stockTotal={stockTotal}/>
            <SubTitle title={stockTitle}/>
        </div>
    )
}

export default Products;