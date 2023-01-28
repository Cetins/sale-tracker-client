import React, { useState } from 'react';
import StaffService from '../../services/StaffService';
import { useNavigate } from 'react-router-dom';

const NewStaff = () => {
    const [name, setName] = useState();
    const [sales, setSales] = useState(0);
    const [serviceCommission, setServiceCommission] = useState(0);
    const [productCommission, setProductCommission] = useState(0);
    const navigate = useNavigate();

    const handleNameChange = (e) => {setName(e.target.value)}
    const handleSalesChange = (e) => {setSales(parseInt(e.target.value))}
    const handleServiceCommissionChange = (e) => {setServiceCommission(parseInt(e.target.value))}
    const handleProductCommissionChange = (e) => {setProductCommission(parseInt(e.target.value))}

    const handleNewStaffSubmit = (e) => {
        e.preventDefault();
        StaffService.addStaff({
            name: name,
            sales: sales,
            service_commission: serviceCommission,
            product_commission: productCommission
        })
        .then(alert("New Staff Member Added"))
        .then(navigate("/dashboard"))
    }

    return (
        <div className='parent-container'>
            <div className='child-container'>
                <form className="styled-form" onSubmit={handleNewStaffSubmit}>
                    <div>
                        <label>Staff Member Name:</label>
                        <input type="text" onChange={handleNameChange} required/>
                    </div>
                    <div>
                        <label>Sales Sum:</label>
                        <input type="number" onChange={handleSalesChange} />
                    </div>
                    <div>
                        <label>Service Commission Percentage:</label>
                        <input type="number" onChange={handleServiceCommissionChange} />
                    </div>
                    <div>
                        <label>Product Commission Percentage:</label>
                        <input type="number" onChange={handleProductCommissionChange} />
                    </div>
                    <input type="submit" value="Add Staff Member"/>
                </form>
            </div>
        </div>
    )
}

export default NewStaff;