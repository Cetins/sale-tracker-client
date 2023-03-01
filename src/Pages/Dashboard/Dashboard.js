import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Services from "./components/Services";
import Staff from "./components/Staff";
import ProductService from "../../services/ProductService";
import ServiceService from "../../services/ServiceService";
import StaffService from '../../services/StaffService';
import SalesService from '../../services/SalesService';

const Dashboard = ({ shop, sales }) => {
    
    return (
        <div className="parent-container">
            <Products products={shop.products} />
            {/* <Services shop={shop} /> */}
            <Staff employees={shop.employees} sales={sales} />
        </div>
    )
}

export default Dashboard;