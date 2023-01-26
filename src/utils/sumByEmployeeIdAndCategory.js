const sumByEmployeeIdAndCategory = (sales, staffId, category) => {
    return sales.reduce((acc, sale) => {
        if (sale.staffId === staffId && sale.category === category) {
            acc += sale.price;
        }
        return acc;
    }, 0);
}

export default sumByEmployeeIdAndCategory;