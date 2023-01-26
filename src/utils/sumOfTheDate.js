const sumOfTheDate = (sales, date) => {

    return sales.reduce((acc, sale) => {
        if (sale.date === date) {
            acc += sale.price;
        }
        return acc;
    }, 0);
}

export default sumOfTheDate;