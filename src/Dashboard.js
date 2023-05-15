import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import Card from './Card'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title);

function Dashboard() {

    return (
        // we use multiple Div wrapping error avoid to Fragment
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Let's Create some Videos!</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> Report </a>
            </div>

            {/* card creation */}
            <div className="row">
                <Card title="Projects" value="4,000" color="primary" />
                <Card title="Go Live" value="619" color="success" />
                <Card title="Record Videos" value="210" color="danger" />
                <Card title="Record Podcast" value="102" color="warning " />             
            </div>

            {/* Doughnut chart creation */}
            <div className="row">
                <div className="col-lg-4">
                    <Doughnut data={{
                        labels: [
                            'Red',
                            'Blue',
                            'Yellow'
                        ],
                        datasets: [{
                            label: 'My Collections',
                            data: [240, 80, 130],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            hoverOffset: 4
                        }]
                    }} />
                </div>

                {/* line chart creation */}
                <div className="col-lg-8">
                    <Line options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text:'Monthly Collections via Line-Chart.js',
                            },
                        },
                    }}
                        data={{
                            labels:  ['January', 'February', 'March', 'April', 'May', 'June', 'July','August' ,'September','October','November','December'],
                            datasets: [{
                                label: 'My Edits',
                                data: [65, 59, 80, 81, 56, 55, 40,50,67,14,90,69],
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            }]
                        }} />
                </div>
            </div>

        </>
    )
}

export default Dashboard