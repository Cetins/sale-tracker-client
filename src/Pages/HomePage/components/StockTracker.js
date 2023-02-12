import React from 'react';
import MainTitle from '../../../components/MainTitle';
import SubTitle from '../../../components/SubTitle';

const StockTracker = ({ products }) => {

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
