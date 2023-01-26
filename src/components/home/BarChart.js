import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import SalesService from '../../services/SalesService';
import getDailySalesSumsForWeek from '../../utils/getDailySaleSumsForWeek';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const BarChart = () => {
    const [sales, setSales] = useState(null);

    useEffect(() => {
        SalesService.getSales()
            .then(res => setSales(res))
    }, []);

    if (sales === null) {return <div>Sales Loading...</div>}

    const weekData = getDailySalesSumsForWeek(sales);

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Daily Sum',
                data: weekData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ]
    }

    const options = {}

    return (
        <div className='child-container'>
            <h1>Weekly Stats</h1>

            <div className='child-container'>
                <Bar
                    data = {data}
                    options = {options}
                ></Bar>
            </div>
        </div>
    )
}

export default BarChart