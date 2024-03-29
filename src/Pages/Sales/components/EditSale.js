import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SaleService from '../../../services/SalesService';
import StaffService from '../../../services/StaffService';
import ServiceService from '../../../services/ServiceService';
import ProductServices from '../../../services/ProductService';
import ShopService from '../../../services/ShopService';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const EditSale = () => {
    const {saleId} = useParams();
    const [sale, setSale] = useState(null);
    const [services, setServices] = useState(null);
    const [products, setProducts] = useState(null);
    const [staff, setStaff] = useState(null);
    const [shop, setShop] = useState(null);
    const navigate = useNavigate(null);
    let serviceOptions;
    let productOptions;
    let staffOptions;

    useEffect(() => {
        SaleService.getSale(saleId)
            .then(res => setSale(res))
    }, []);

    useEffect(() => {
        ServiceService.getServices()
            .then(res => setServices(res))
    }, []);

    useEffect(() => {
        ProductServices.getProducts()
            .then(res => setProducts(res))
    }, []);

    useEffect(() => {
        StaffService.getStaff()
            .then(res => setStaff(res))
    }, []);

    useEffect(() => {
        ShopService.getShop()
            .then(res => setShop(res[0]))
    }, []);
    
    const handleServiceChange = (e) => {sale.title = e.target.value};
    const handleProductChange = (e) => {sale.title = e.target.value};
    const handleStaffChange = (e) => {sale.staff = e.target.value};
    const handleDateChange = (e) => {sale.date = e.target.value};

    if (sale === null) { return (<div>Loading Sale...</div>) }
    if (services === null) { return (<div>Loading Services...</div>) }
    if (products === null) { return (<div>Loading Products...</div>) }
    if (staff === null) { return (<div>Loading Staff...</div>) }
    if (shop === null) { return (<div>Loading Shop...</div>) }
    
    const navigateSales = () => navigate("/sales");

    const handleUpdateSaleSubmit = (e) => {
        e.preventDefault();
        const passCode = prompt("Please enter your code to confirm");
        if(passCode === shop.passCode) {
            SaleService.updateSales(sale)
            .then(setTimeout(navigateSales, 1000))
            .then(toast.info("Sale Info Updated"))
        } else {
            toast.error("Sorry your passCode is not correct/valid");
            navigate("/sales");
        }
    }
    
    const handleDeleteSale = (e) => {
        e.preventDefault();
        const passCode = prompt("Please enter your code to confirm");
        if(passCode === shop.passCode) {
            SaleService.deleteSale(saleId)
            .then(alert("Sale Deleted"))
            .then(navigate("/sales"));
        } else {
            alert("Sorry your passCode is not correct/valid");
            navigate("/sales");
        }
    }

    // right now using selected in option element creates warnings on the browser, but it's working no fault
    // until I've learned how to get same results with the way react likes, this three lines below stays as it is :))
    staffOptions = staff.map(item => <option key={item._id} selected={item._id === sale.staffId ? true : false}>{item.name}</option>)

    serviceOptions = services.map(item => <option key={item._id} selected={item._id === sale.serviceId ? true : false}>{item.title}</option>)

    productOptions = products.map(item => <option key={item._id} selected={item._id === sale.productId ? true : false}>{item.title}</option>)

    return (
        <div className='parent-container'>
            <div className='child-container'>
                <form className="styled-form" onSubmit={handleUpdateSaleSubmit}>
                    <div>
                        <label>Staff:</label>
                        <select onChange={handleStaffChange} required>
                            {staffOptions}
                        </select>
                    </div>

                    {sale.category === "service" ? 
                        <div>
                            <label>Service:</label>
                            <select onChange={handleServiceChange} required>
                                {serviceOptions}
                            </select>
                        </div>
                        : 
                        <div>
                            <label>Product:</label>
                            <select onChange={handleProductChange} required>
                                {productOptions}
                            </select>
                        </div>}

                    <div>
                        <label>Date:</label>
                        <input type="date" defaultValue={sale.date} onChange={handleDateChange} />
                    </div>
                    <input type="submit" value="Update Sale"/>
                </form>
                <button className='delete-button' onClick={handleDeleteSale}><MdDeleteForever className='icon'/>Delete Sale</button>
            </div>
        </div>
    )
}

export default EditSale