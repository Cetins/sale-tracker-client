import React from 'react';
import StaffService from '../../services/StaffService';
import SubTitle from '../SubTitle';
import StaffTable from './StaffTable';
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Staff = ({ staff }) => {
  return (
    <div className='child-container'>
        <SubTitle title="Staff Members"/>
        <StaffTable staff={staff} />
        <button><Link to="/staff-new"><FaPlus className="icon"/>New Staff Member</Link></button>
    </div>
  )
}

export default Staff