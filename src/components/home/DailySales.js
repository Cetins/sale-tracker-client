import React, { useState, useEffect } from 'react';
import StaffService from '../../services/StaffService';
import SalesService from '../../services/SalesService';
import MainTitle from '../MainTitle';
import SubTitle from '../SubTitle';

const DailySales = () => {
    const [staff, setStaff] = useState([]);
    const [sales, setSales] = useState([]);

    useEffect(() => {
        StaffService.getStaff()
            .then(res => setStaff(res))
    }, []);

    useEffect(() => {
        SalesService.getSales()
            .then(res => setSales(res))
    }, []);

    if (staff === []) {return <div>Staff Loading...</div>}
    if (sales === []) {return <div>Sales Loading...</div>}

    const sumByEmployeeIdAndCategoryAndDate = (sales, staffId, category, date) => {
        return sales.reduce((acc, sale) => {
            if (sale.staffId === staffId && sale.category === category && sale.date === date) {
                acc += sale.price;
            }
            return acc;
        }, 0);
    }

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
    const sumOfToday = () => {
        const date = getTodaysDate();

        return sales.reduce((acc, sale) => {
            if (sale.date === date) {
                acc += sale.price;
            }
            return acc;
        }, 0);
    }

    const tableItems = staff.map(item => {
        const date = getTodaysDate();

        return (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{sumByEmployeeIdAndCategoryAndDate(sales, item._id, "service", date)}</td>
                <td>{sumByEmployeeIdAndCategoryAndDate(sales, item._id, "product", date)}</td>
            </tr>
        )
    })

    const dailyTurnover = "Total Sales For Today is: " + sumOfToday();

    return (
        <div>
            <MainTitle title="Daily Sales Sum"/>
            <div className="parent-container">
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service Sales Today £</th>
                            <th>Product Sales Today £</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItems}
                    </tbody>
                </table>
                <SubTitle title={dailyTurnover} />
            </div>
            
        </div>
    )
}

export default DailySales