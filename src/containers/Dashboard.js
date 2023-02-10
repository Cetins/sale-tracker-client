import React, { useEffect, useState } from "react";
import Products from "../components/dashboard/Products";
import Services from "../components/dashboard/Services";
import Staff from "../components/dashboard/Staff";
import ProductService from "../services/ProductService";
import ServiceService from "../services/ServiceService";
import StaffService from '../services/StaffService';
import SalesService from '../services/SalesService';

const Dashboard = () => {
    const [products, setProducts] = useState(null);
    const [services, setServices] = useState(null);
    const [staff, setStaff] = useState(null);
    const [sales, setSales] = useState(null);
    
    useEffect(() => {
        ProductService.getProducts()
            .then(res => setProducts(res));
    }, []);
    useEffect(() => {
        ServiceService.getServices()
            .then(res => setServices(res));
    }, []);
    useEffect(() => {
        StaffService.getStaff()
            .then(res => setStaff(res));
    }, []);
    useEffect(() => {
        SalesService.getSales()
            .then(res => setSales(res));
    }, []);

    if (products === null) {return <div>Loading Products...</div>}
    if (services === null) {return <div>Services Loading...</div>}
    if (staff === null) {return <div>Staff Loading...</div>}
    if (sales === null) {return <div>Sales Loading...</div>}
    
    return (
        <div className="parent-container">
            <Products products={products} />
            <Services services={services} />
            <Staff staff={staff} sales={sales} />
        </div>
    )
}

export default Dashboard;