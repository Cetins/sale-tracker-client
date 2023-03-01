import React from "react";

const SelectStaff = ({ employees, handleEmployeeChange }) => {

    const employeeOptions = employees.map((employee, index) => {
        return <option key={employee._id} value={index}>{employee.full_name}</option>
    })

    return (
        <select onChange={handleEmployeeChange} required>
            <option></option>
            {employeeOptions}
        </select>
    )
}

export default SelectStaff;