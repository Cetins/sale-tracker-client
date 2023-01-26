const sumByEmployeeIdAndCategoryAndDate = (sales, staffId, category, date) => {
    return sales.reduce((acc, sale) => {
        if (sale.staffId === staffId && sale.category === category && sale.date === date) {
            acc += sale.price;
        }
        return acc;
    }, 0);
}

export default sumByEmployeeIdAndCategoryAndDate;