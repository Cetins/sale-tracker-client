import React from "react";
import SubTitle from "../SubTitle"
import ServicesTable from "./ServicesTable";
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Services = ({ services }) => {

    return (
        <div className="child-container">
            <SubTitle title="Services"/>
            <ServicesTable services={services}/>
            <button><Link to="/service-new"><FaPlus className="icon"/>New Service</Link></button>
        </div>
    )
}

export default Services;