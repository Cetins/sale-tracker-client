import React from 'react';
import StaffService from '../../services/StaffService';
import SubTitle from '../SubTitle';
import StaffTable from './StaffTable';


const Staff = ({ staff }) => {
  return (
    <div className='child-container'>
        <SubTitle title="Staff Members"/>
        <StaffTable staff={staff} />
    </div>
  )
}

export default Staff