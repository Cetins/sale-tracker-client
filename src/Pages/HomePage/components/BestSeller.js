import React from 'react';
import { GiProfit } from 'react-icons/gi';

const BestSeller = () => {
  return (
    <div className='parent-container'>
        <div className='child-container'>
        <GiProfit className='icon' size={70}/>
            <div className='child-container'>
                <h1>Stock Up</h1>
            </div>
            <div className='child-container'>
                <p>Product sales are great examples of passive incomes in shops. You can easily track your stocks from your app and never refuse a sale due to lack of stock. For more tips read our blog on the website prepared by business experts with years of experience.</p>
            </div>
        </div>
    </div>
  )
}

export default BestSeller