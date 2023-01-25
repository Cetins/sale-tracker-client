import React, { useState, useEffect } from "react";
import ShopService from '../services/ShopService';
import DailySales from "../components/home/DailySales";

const Home = () => {
    const [shop, setShop] = useState(null);

    useEffect(() => {
        ShopService.getShop()
            .then(res => setShop(res[0]))
    }, []);
        
    if (shop === null) { return (<div>Loading Shop...</div>) }

    return (
        <div className="parent-container">
           <h1>Welcome back {shop.name}</h1>
           <DailySales />
        </div>
    )
}

export default Home;