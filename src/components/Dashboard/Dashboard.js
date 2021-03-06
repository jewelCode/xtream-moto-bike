import React from 'react';
import { CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
   const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
    return (
        <div className="container" style={{backgroundColor: '#fefbe9'}}>
            <div className="row mt-5 g-5">
                <div className="col-md-6 col-lg-6 col-sm-12">
                <h3 className="text-center">Month Wise Sell</h3>
                <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                     <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="sell" />
                        <Tooltip />
                </LineChart>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                <h3 className="text-center">Revenue VS Investment</h3>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;