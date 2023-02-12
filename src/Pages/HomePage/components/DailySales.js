import React from 'react';
import MainTitle from '../../../components/MainTitle';
import SubTitle from '../../../components/SubTitle';
import getTodaysDate from '../../../utils/getTodaysDate';
import sumOfTheDate from '../../../utils/sumOfTheDate';
import sumByEmployeeIdAndCategoryAndDate from '../../../utils/sumByEmployeeIdAndCategoryAndDate';


const DailySales = ({ sales, staff }) => {
    const sumOfToday = () => {
        const date = getTodaysDate();
        return sumOfTheDate(sales, date);
    }

    const tableItems = staff.map(item => {
        const date = getTodaysDate();

        return (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>£ {sumByEmployeeIdAndCategoryAndDate(sales, item._id, "service", date)}</td>
                <td>£ {sumByEmployeeIdAndCategoryAndDate(sales, item._id, "product", date)}</td>
            </tr>
        )
    })

    const dailyTurnover = "Total Sales For Today is: £ " + sumOfToday();

    return (
        <div className="child-container">
            <MainTitle title="Your sale stats for today"/>

            <div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Staff Name</th>
                            <th>Service Sales Today</th>
                            <th>Product Sales Today</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItems}
                    </tbody>
                </table>
            </div>
            <div>
                <SubTitle title={dailyTurnover} />
            </div>
        </div>
    )
}

export default DailySales