import React, { useState } from "react";
import '../../../styles/Tabs.css';
import ProductService from "../../../services/ProductService";
import SalesService from "../../../services/SalesService";
import ServiceSaleTab from "./ServiceSaleTab";
import ProductSaleTab from "./ProductSaleTab";

const SaleTabs = ({ shop, sales, setSales }) => {

  const [activeTab, setActiveTab] = useState("tab1");
  const [service, setService] = useState();
  const [product, setProduct] = useState();
  const [payment, setPayment] = useState();
  const [employee, setEmployee] = useState();
  const [date, setDate] = useState();    

  function handleTab1() {setActiveTab("tab1")};
  function handleTab2() {setActiveTab("tab2")};

  const handleServiceChange = (e) => {setService(employee.services[e.target.value])}
  const handlePaymentChange = (e) => {setPayment(shop.payment_methods[e.target.value])}
  const handleProductChange = (e) => {setProduct(shop.products[e.target.value])}
  const handleEmployeeChange = (e) => {setEmployee(shop.employees[e.target.value])}
  const handleDateChange = (e) => {setDate(e.target.value)}

  const updateStock = (stockSold) => {
    const updatedProduct = {...product}
    updatedProduct.stock -= 1
    updatedProduct.sold += 1
    setProduct(updatedProduct)
    ProductService.updateProduct(updatedProduct)
  }

  const addServiceSale = (sale) => {
    SalesService.addServiceSale(sale);
    const updatedSales = [...sales, sale]  
    setSales(updatedSales);
  }

  const addProductSale = (sale) => {
    SalesService.addProductSale(sale);
    const updatedSales = [...sales, sale]  
    setSales(updatedSales);
  }

  return (
    <div className="Tabs child-container">
      <ul className="nav">
        <li key="service-tab" className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Service Sale</li>
        <li key="product-tab" className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Product Sale</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? 
          <ServiceSaleTab 
            shop={shop}
            employee={employee}
            service={service}
            payment={payment}
            date={date}
            addServiceSale={addServiceSale}
            handleEmployeeChange={handleEmployeeChange}
            handleServiceChange={handleServiceChange}
            handlePaymentChange={handlePaymentChange}
            handleDateChange={handleDateChange} /> : 
          <ProductSaleTab 
            shop={shop}
            employee={employee}
            product={product}
            payment={payment}
            date={date}
            addProductSale={addProductSale}
            updateStock={updateStock}
            handleProductChange={handleProductChange}
            handleEmployeeChange={handleEmployeeChange}
            handlePaymentChange={handlePaymentChange}
            handleDateChange={handleDateChange} />}
      </div>
    </div>
  );
};

export default SaleTabs;