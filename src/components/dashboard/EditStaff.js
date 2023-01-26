import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StaffService from '../../services/StaffService';
import { MdDeleteForever } from 'react-icons/md';

const EditStaff = () => {
  const {staffId} = useParams();
  const [staffMember, setStaffMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    StaffService.getStaffMember(staffId)
    .then(res => setStaffMember(res))
  }, []);

  const handleNameChange = (e) => {staffMember.name = (e.target.value)};
  const handleSalesSumChange = (e) => {staffMember.sales = (e.target.value)};
  const handleServiceCommissionChange = (e) => {staffMember.service_commission = (e.target.value)};
  const handleProductCommissionChange = (e) => {staffMember.product_commission = (e.target.value)};

  const handleUpdateStaffSubmit = (e) => {
    e.preventDefault();
    StaffService.updateStaff(staffMember)
    .then(alert("Staff Member Updated"))
    .then(navigate("/dashboard"));
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
                <label>Sales Sum:</label>
                <input type="number" defaultValue={staffMember?.sales} onChange={handleSalesSumChange} required/>
            </div>
            <div>
                <label>Service Commission:</label>
                <input type="number" defaultValue={staffMember?.service_commission} onChange={handleServiceCommissionChange} required/>
            </div>
            <div>
                <label>Product Commission:</label>
                <input type="number" defaultValue={staffMember?.product_commission} onChange={handleProductCommissionChange} required/>
            </div>
            <input type="submit" value="Update Staff Member"/>
          </form>
      </div>
      <button className='delete-button' onClick={handleDeleteStaffMember}><MdDeleteForever className='icon'/>Delete Staff Member</button>
    </div>
  )
}

export default EditStaff