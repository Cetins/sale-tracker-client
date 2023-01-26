import React, { useState, useEffect } from "react";
import ShopService from '../services/ShopService';
import DailySales from "../components/home/DailySales";
import BarChart from "../components/home/BarChart";
import PieChart from "../components/home/PieChart";
import StockTracker from "../components/home/StockTracker";

const Home = () => {
    const [shop, setShop] = useState(null);

    useEffect(() => {
        ShopService.getShop()
            .then(res => setShop(res[0]))
    }, []);
        
    if (shop === null) { return (<div>Loading Shop...</div>) }

    return (
        <div>
            <h1>Welcome back, {shop.name}</h1>
            <div className="parent-container">
                <DailySales />
                <div>
                    <PieChart />
                </div>
                <div>
                    <BarChart />
                </div>
                <StockTracker />
            </div>
        </div>
    )
}

export default Home;