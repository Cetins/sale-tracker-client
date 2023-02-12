import React from 'react';
import SubTitle from '../../../components/SubTitle';
import StaffTable from './StaffTable';
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Staff = ({ staff, sales }) => {
  return (
    <div className='child-container'>
        <SubTitle title="Staff Members"/>
        <StaffTable staff={staff} sales={sales} />
        <button><Link to="/staff-new"><FaPlus className="icon"/>New Staff Member</Link></button>
    </div>
  )
}

export default Staff