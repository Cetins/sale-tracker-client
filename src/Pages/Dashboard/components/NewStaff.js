import React, { useState } from 'react';
import StaffService from '../../../services/StaffService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NewStaff = () => {
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [serviceCommission, setServiceCommission] = useState(0);
    const [productCommission, setProductCommission] = useState(0);
    const navigate = useNavigate();
    const navigateDashboard = () => navigate("/dashboard");
    const categoryOptions = ["Self-employed", "Wages"];

    const handleNameChange = (e) => {setName(e.target.value)}
    const handleCategoryChange = (e) => {setCategory(e.target.value)}
    const handleServiceCommissionChange = (e) => {setServiceCommission(parseInt(e.target.value))}
    const handleProductCommissionChange = (e) => {setProductCommission(parseInt(e.target.value))}

    const handleNewStaffSubmit = (e) => {
        e.preventDefault();
        StaffService.addStaff({
            name: name,
            category: category,
            service_percentage: serviceCommission,
            product_percentage: productCommission
        })
        .then(setTimeout(navigateDashboard, 1000))
        .then(toast.info("New Staff Member Added"))
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
                        <label>Category:</label>
                        <select onChange={handleCategoryChange} required>
                            {categoryOptions.map((item, index) => <option key={index}>{item}</option>)}
                        </select>
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