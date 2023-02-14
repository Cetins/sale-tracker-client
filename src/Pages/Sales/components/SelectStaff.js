import React from "react";

const SelectStaff = ({ staff, handleStaffMemberChange }) => {

    const staffOptions = staff.map((member, index) => {
        return <option key={member._id} value={index}>{member.first_name}</option>
    })

    return (
        <select onChange={handleStaffMemberChange} required>
            <option></option>
            {staffOptions}
        </select>
    )
}

export default SelectStaff;