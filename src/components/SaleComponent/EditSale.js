import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SaleService from '../../services/SalesService';
import StaffService from '../../services/StaffService';
import ServiceService from '../../services/ServiceService';
import ProductServices from '../../services/ProductService';
import { MdDeleteForever } from 'react-icons/md';

const EditSale = () => {
    const {saleId} = useParams();
    const [sale, setSale] = useState(null);
    const [services, setServices] = useState(null);
    const [products, setProducts] = useState(null);
    const [staff, setStaff] = useState(null);
    const navigate = useNavigate();
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
    
    const handleServiceChange = () => {};
    const handleProductChange = () => {};
    const handleStaffChange = () => {};
    const handleDateChange = () => {};

    const handleUpdateSaleSubmit = (e) => {
        e.preventDefault();
        SaleService.updateSales(sale)
        .then(alert("Sale Updated"))
        .then(navigate("/dashboard"));
    }
    
    const handleDeleteSale = (e) => {
        e.preventDefault();
        SaleService.deleteSale(saleId)
        .then(alert("Sale Deleted"))
        .then(navigate("/dashboard"));
    }

    if (sale === null) { return (<div>Loading Sale...</div>) }
    if (services === null) { return (<div>Loading Services...</div>) }
    if (products === null) { return (<div>Loading Products...</div>) }
    if (staff === null) { return (<div>Loading Staff...</div>) }

    staffOptions = staff.map(item => <option key={item._id}>{item.name}</option>)
    serviceOptions = services.map(item => <option key={item._id}>{item.title}</option>)
    productOptions = products.map(item => <option key={item._id}>{item.title}</option>)

    return (
        <div>
            <p>test edit sale</p>
            <form className="styled-form" onSubmit={handleUpdateSaleSubmit}>
                <div>
                    <label>Staff Member:</label>
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
                    </div>
                }

                <div>
                    <label>Date:</label>
                    <input type="date" defaultValue={sale.date} onChange={handleDateChange} />
                </div>
            </form>
            <button onClick={handleDeleteSale}><MdDeleteForever className='icon'/>Delete Sale</button>
        </div>
    )
}

// {
//     category: "service",
//     title: "test service",
//     service_id: 121212,
//     price: 30,
//     staff: "test staff",
//     staffId: 1234,
//     date: "01/01/2022"
// }

export default EditSale