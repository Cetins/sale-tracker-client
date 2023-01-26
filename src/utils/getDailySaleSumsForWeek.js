import moment from 'moment';
import getTodaysDate from './getTodaysDate';
import sumOfTheDate from './sumOfTheDate';

const getDailySalesSumsForWeek = (sales) => {

    const today = getTodaysDate();
    const monday = moment(today).startOf('isoWeek').format("YYYY-MM-DD")
    const week = [monday];
    let day = monday;
    for (let i = 0; i <= 5; i++) {
        day = moment(day).add(1,'day').format("YYYY-MM-DD")
        week.push(day)
    }

    const salesForWeek = week.map(element => {
        return sumOfTheDate(sales, element)
    })

    return salesForWeek;
}

export default getDailySalesSumsForWeek;