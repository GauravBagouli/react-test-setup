import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Trends = () => {
    // Dummy data for the chart (replace this with your actual data)
    const data = [
        { date: "2023-01-01", value: 120 },
        { date: "2023-02-01", value: 130 },
        { date: "2023-03-01", value: 125 },
        { date: "2023-04-01", value: 140 },
        { date: "2023-05-01", value: 135 },
        { date: "2023-06-01", value: 145 },
    ];

    // Convert the dummy data into Highcharts format
    const chartData = data.map(item => [new Date(item.date).getTime(), item.value]);

    // Highcharts options
    const options = {
        chart: {
            type: 'line', // Set the chart type
            zoomType: 'x', // Enable zooming on the x-axis
        },
        title: {
            text: 'Trends Over Time', // Chart title
        },
        xAxis: {
            type: 'datetime', // Set x-axis to datetime type
            title: {
                text: 'Date', // x-axis title
            },
        },
        yAxis: {
            title: {
                text: 'Value', // y-axis title
            },
        },
        series: [{
            name: 'Trend Values', // Series name
            data: chartData, // Data for the series
            marker: {
                enabled: true, // Show markers for data points
            },
        }],
        tooltip: {
            shared: true,
            crosshairs: true,
        },
    };

    return (
        <div>
            <h2>Trends Chart</h2>
            <HighchartsReact
                highcharts={Highcharts} // Pass the Highcharts object
                options={options} // Pass the chart options
            />
        </div>
    );
};

export default Trends;
