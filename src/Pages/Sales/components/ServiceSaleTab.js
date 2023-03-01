import React, { useState } from "react";
import '../../../styles/Tabs.css';
import SelectService from "./SelectService";
import SelectStaff from "./SelectStaff";
import '../../../styles/Form.css'
import ServiceInfo from "./ServiceInfo";
import { toast } from 'react-toastify';
import SelectPayment from "./SelectPayment";

const ServiceSaleTab = ({ 
    shop,
    employee,
    service,
    date,
    addSale,
    handleEmployeeChange,
    handleServiceChange,
    handlePaymentChange,
    handleDateChange
    }) => {

    const handleServiceSaleSubmit = () => {
        addSale({
            shop_id: shop._id,
            category: "Service",
            employee: employee.username,
            employee_id: employee._id,
            service: service.title,
            service_id: service._id,
            price: service.price,
            date: date
        });
        toast.info('New sale added successfully');
    }
    
    return (
        <div className="FirstTab">
            <form className="styled-form" onSubmit={handleServiceSaleSubmit}>
                <div>
                    <label>Staff:</label>
                    <SelectStaff employees={shop.employees} handleEmployeeChange={handleEmployeeChange} />
                </div>
                { employee ? 
                    <div>
                        <label>Service:</label>
                        <SelectService services={employee.services} handleServiceChange={handleServiceChange}/>
                    </div> : ""}
                
                <div>
                    <label>Payment Method:</label>
                    <SelectPayment paymentMethods={shop.payment_methods} handlePaymentChange={handlePaymentChange} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" onChange={handleDateChange} required/>
                </div>
                <input type="submit" value="Submit Sale"/>
            </form>
            {service &&  (
                <ServiceInfo service={service} />
            )}
        </div>
    );
};

export default ServiceSaleTab;