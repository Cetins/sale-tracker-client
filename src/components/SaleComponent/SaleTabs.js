import React, { useState } from "react";
import '../../styles/Tabs.css';
import ProductService from "../../services/ProductService";
import SalesService from "../../services/SalesService";
import ServiceSaleTab from "./ServiceSaleTab";
import ProductSaleTab from "./ProductSaleTab";

const SaleTabs = ({ services, products, staff, sales, setSales }) => {

  const [activeTab, setActiveTab] = useState("tab1");
  const [service, setService] = useState();
  const [product, setProduct] = useState();
  const [staffMember, setStaffMember] = useState();
  const [date, setDate] = useState();    

  function handleTab1() {setActiveTab("tab1")};
  function handleTab2() {setActiveTab("tab2")};

  const handleServiceChange = (e) => {setService(services[e.target.value])}
  const handleProductChange = (e) => {setProduct(products[e.target.value])}
  const handleStaffMemberChange = (e) => {setStaffMember(staff[e.target.value])}
  const handleDateChange = (e) => {setDate(e.target.value)}

  const updateStock = (stockSold) => {
    const updatedProduct = {...product}
    updatedProduct.stock -= 1
    updatedProduct.sold += 1
    setProduct(updatedProduct)
    ProductService.updateProduct(updatedProduct)
  }

  const addSale = (sale) => {
    SalesService.addSale(sale);
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
            staff={staff}
            services={services}
            staffMember={staffMember}
            service={service}
            date={date}
            addSale={addSale}
            handleStaffMemberChange={handleStaffMemberChange}
            handleServiceChange={handleServiceChange}
            handleDateChange={handleDateChange} /> : 
          <ProductSaleTab 
            staff={staff}
            products={products}
            staffMember={staffMember}
            product={product}
            date={date}
            addSale={addSale}
            updateStock={updateStock}
            handleProductChange={handleProductChange}
            handleStaffMemberChange={handleStaffMemberChange}
            handleDateChange={handleDateChange} />}
      </div>
    </div>
  );
};

export default SaleTabs;