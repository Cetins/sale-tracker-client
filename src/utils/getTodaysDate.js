const getTodaysDate = () => {
    let objectDate = new Date();
    let day = objectDate.getDate();
    if (day < 10) {
        day = "0"+day;
    }
    let month = objectDate.getMonth();
    if (month > 8) {
        month +=1
    } else {
        const newMonth = month+1
        month = "0"+newMonth
    }

    let year = objectDate.getFullYear();

    const date = year+'-'+month+'-'+day;

    return date;
}

export default getTodaysDate;