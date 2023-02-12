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

const Home = () => {
    const [shop, setShop] = useState(null);
    const [products, setProducts] = useState(null);
    const [sales, setSales] = useState(null);
    const [staff, setStaff] = useState([]);
    

    useEffect(() => {
        ShopService.getShop()
            .then(res => setShop(res[0]))
    }, []);

    useEffect(() => {
        ProductService.getProducts()
            .then(res => setProducts(res))
    }, []);

    useEffect(() => {
        SalesService.getSales()
            .then(res => setSales(res))
    }, []);

    useEffect(() => {
        StaffService.getStaff()
            .then(res => setStaff(res))
    }, []);
        
    if (shop === null) { return <div>Loading Shop...</div>}
    if (products === null) {return <div>Loading Products...</div>}
    if (sales === null) {return <div>Sales Loading...</div>}
    if (staff === []) {return <div>Staff Loading...</div>}

    return (
        <div>
            <h1 className="main-title">Welcome back, {shop.name}</h1>
            <div className="parent-container">
                <div className="column child-container">
                    <BarChart sales={sales}/>
                    <PieChart products={products} />
                </div>
                <div className="column child-container">
                    <DailySales sales={sales} staff={staff} />
                    <StockTracker products={products}/>
                    <BestSeller />
                    <ThemeChange />
                </div>
            </div>
        </div>
    )
}

export default Home;