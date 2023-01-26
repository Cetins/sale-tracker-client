import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService';
import MainTitle from '../MainTitle';
import SubTitle from '../SubTitle';

const StockTracker = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        ProductService.getProducts()
        .then(res => setProducts(res))
    })

    if (products === null) {return <div>Loading Products...</div>}

    const lowStocks = products.filter(product => product.stock < 5)

    const stockWarnings = lowStocks.map(element => <h2 key={element._id}>{element.stock} {element.title} left in your stock.</h2>)

    return (
        <div className='child-container'>
            <MainTitle title="Stock Status"/>
            {lowStocks.length === 0 ? 
            <div className='child-container'>
                <SubTitle title="You don't have any stock shortages at the moment."/>
            </div> : 
            <div className='child-container'>
                {stockWarnings}
            </div>}
        </div>
    )
}

export default StockTracker;
