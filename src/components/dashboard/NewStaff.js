import React, { useState } from 'react';
import StaffService from '../../services/StaffService';
import { useNavigate } from 'react-router-dom';

const NewStaff = () => {
    const [name, setName] = useState();
    const [sales, setSales] = useState(0);
    const [serviceCommission, setServiceCommission] = useState();
    const [productCommission, setProductCommission] = useState();
    const navigate = useNavigate();

    const handleNameChange = (e) => {setName(e.target.value)}
    const handleSalesChange = (e) => {setSales(e.target.value)}
    const handleServiceCommissionChange = (e) => {setServiceCommission(e.target.value)}
    const handleProductCommissionChange = (e) => {setProductCommission(e.target.value)}

    const handleNewStaffSubmit = (e) => {
        e.preventDefault();
        StaffService.addStaff({
            name: name,
            sales: sales,
            serviceCommission: serviceCommission,
            productCommission: productCommission
        })
        .then(alert("New Staff Member Added"))
        .then(navigate("/dashboard"))
    }

    return (
        <div>
            <p>new staff member test</p>
            <form className="styled-form" onSubmit={handleNewStaffSubmit}>
                <div>
                    <label>Staff Member Name:</label>
                    <input type="text" onChange={handleNameChange} required/>
                </div>
                <div>
                    <label>Sales Sum:</label>
                    <input type="number" defaultValue={0} onChange={handleSalesChange} required/>
                </div>
                <div>
                    <label>Service Commission Percentage:</label>
                    <input type="number" defaultValue={0} onChange={handleServiceCommissionChange} required/>
                </div>
                <div>
                    <label>Product Commission Percentage:</label>
                    <input type="number" defaultValue={0} onChange={handleProductCommissionChange} required/>
                </div>
                <input type="submit" value="Add Staff Member"/>
            </form>
        </div>
    )
}

export default NewStaff;