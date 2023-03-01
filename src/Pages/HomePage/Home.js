import React, { useState, useEffect } from "react";
import ShopService from '../../services/ShopService';
import ProductService from '../../services/ProductService';
import SalesService from '../../services/SalesService';
import StaffService from '../../services/StaffService';
import DailySales from "./components/DailySales";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import StockTracker from "./components/StockTracker";
import BestSeller from "./components/BestSeller";
import ThemeChange from "./components/ThemeChange";

const Home = ({ shop, sales }) => {
    
    if (shop === null) { return <div>Loading Shop...</div>}
    if (sales === null) {return <div>Sales Loading...</div>}

    return (
        <div>
            <h1 className="main-title">Welcome back, {shop.title}</h1>
            <div className="parent-container">
                <div className="column child-container">
                    <BarChart sales={sales}/>
                    <PieChart products={shop.products} />
                </div>
                <div className="column child-container">
                    <DailySales sales={sales} employees={shop.employees} />
                    <StockTracker products={shop.products}/>
                    <BestSeller />
                    <ThemeChange />
                </div>
            </div>
        </div>
    )
}

export default Home;