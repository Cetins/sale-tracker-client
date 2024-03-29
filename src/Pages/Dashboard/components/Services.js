import React from "react";
import ServicesTable from "./ServicesTable";
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { GiHairStrands } from 'react-icons/gi';

const Services = ({ services }) => {

    return (
        <div className="child-container">
            <h2 className="sub-title"><div><GiHairStrands className="icon"/></div> Services</h2>
            <ServicesTable services={services}/>
            <button><Link to="/service-new"><FaPlus className="icon"/>New Service</Link></button>
        </div>
    )
}

export default Services;