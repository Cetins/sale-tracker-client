import React, { useState, useEffect } from "react";
import ShopService from '../services/ShopService';
import DailySales from "../components/home/DailySales";
import BarChart from "../components/home/BarChart";
import PieChart from "../components/home/PieChart";
import StockTracker from "../components/home/StockTracker";
import BestSeller from "../components/home/BestSeller";
import ThemeChange from "../components/home/ThemeChange";

const Home = () => {
    const [shop, setShop] = useState(null);

    useEffect(() => {
        ShopService.getShop()
            .then(res => setShop(res[0]))
    }, []);
        
    if (shop === null) { return (<div>Loading Shop...</div>) }

    return (
        <div>
            <h1 className="main-title">Welcome back, {shop.name}</h1>
            <div className="parent-container">
                <div className="column child-container">
                    <BarChart />
                    <PieChart />
                </div>
                <div className="column child-container">
                    <DailySales />
                    <StockTracker />
                    <BestSeller />
                    <ThemeChange />
                </div>
            </div>
        </div>
    )
}

export default Home;