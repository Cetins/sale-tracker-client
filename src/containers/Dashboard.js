import React, { useEffect, useState } from "react";
import Products from "../components/dashboard/Products";
import Services from "../components/dashboard/Services";
import Staff from "../components/dashboard/Staff";
import ProductService from "../services/ProductService";
import ServiceService from "../services/ServiceService";
import StaffService from '../services/StaffService';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        ProductService.getProducts()
            .then(products => setProducts(products));
    }, []);
    useEffect(() => {
        ServiceService.getServices()
            .then(services => setServices(services));
    }, []);
    useEffect(() => {
        StaffService.getStaff()
            .then(res => setStaff(res));
    }, []);

    return (
        <div className="parent-container">
            <Products products={products}/>
            <Services services={services}/>
            <Staff staff={staff}/>
        </div>
    )
}

export default Dashboard;