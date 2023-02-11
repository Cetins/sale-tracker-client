import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StaffService from '../../services/StaffService';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const EditStaff = () => {
  const {staffId} = useParams();
  const [staffMember, setStaffMember] = useState(null);
  const navigate = useNavigate();
  const categoryOptions = ["Self-employed", "Wages"];

  useEffect(() => {
    StaffService.getStaffMember(staffId)
    .then(res => setStaffMember(res))
  }, []);


  const handleNameChange = (e) => {staffMember.name = (e.target.value)};
  const handleCategoryChange = (e) => {staffMember.category = (e.target.value)};
  const handleServiceCommissionChange = (e) => {staffMember.service_commission = parseInt(e.target.value)};
  const handleProductCommissionChange = (e) => {staffMember.product_commission = parseInt(e.target.value)};

  const navigateDashboard = () => navigate("/dashboard");

  const handleUpdateStaffSubmit = (e) => {
    e.preventDefault();
    StaffService.updateStaff(staffMember)
    .then(setTimeout(navigateDashboard, 1000))
    .then(toast.info("Staff Member Updated"))
  }

  const handleDeleteStaffMember = (e) => {
    e.preventDefault();
    StaffService.deleteStaff(staffId)
    .then(alert("Staff Deleted"))
    .then(navigate("/dashboard"));
  }

  if (staffMember === null) {
    return (<div>Loading...</div>)
  }

  return (
    <div className='parent-container'>
      <div className='child-container'>
        <form className="styled-form" onSubmit={handleUpdateStaffSubmit}>
            <div>
                <label>Full Name:</label>
                <input type="text" defaultValue={staffMember?.name} onChange={handleNameChange} required/>
            </div>
            <div>
                <label>Category:</label>
                <select onChange={handleCategoryChange} required>
                    {categoryOptions.map((item, index) => <option key={index} selected={item === staffMember.category ? true : false}>{item}</option>)}
                </select>
            </div>

            <div>
                <label>Service Commission:</label>
                <input type="number" defaultValue={staffMember?.service_percentage} onChange={handleServiceCommissionChange} required/>
            </div>
            <div>
                <label>Product Commission:</label>
                <input type="number" defaultValue={staffMember?.product_percentage} onChange={handleProductCommissionChange} required/>
            </div>
            <input type="submit" value="Update Staff Member"/>
          </form>
          <button className='delete-button' onClick={handleDeleteStaffMember}><MdDeleteForever className='icon'/>Delete Staff Member</button>
      </div>
    </div>
  )
}

export default EditStaff