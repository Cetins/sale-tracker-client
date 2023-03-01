import React , { useState, useEffect } from "react";
import SalesService from '../../services/SalesService';
import ShopService from '../../services/ShopService';
import SalesTable from './components/SalesTable';
import SaleTabs from "./components/SaleTabs";

const Sales = ({ shop, sales, setSales }) => {

    if (shop === null) { return <div>Loading Shop...</div>}
    if (sales === null) {return <div>Sales Loading...</div>}

    return (
        <div className="parent-container">
            <SaleTabs 
                shop={shop}
                sales={sales}
                setSales={setSales} />
            <SalesTable data={sales}/>
        </div>
    )
}

export default Sales;