const sumByEmployeeIdAndCategory = (sales, employeeId, category) => {
    return sales.reduce((acc, sale) => {
        if (sale.employee_id  === employeeId && sale.category === category) {
            acc += sale.price;
        }
        return acc;
    }, 0);
}

export default sumByEmployeeIdAndCategory;