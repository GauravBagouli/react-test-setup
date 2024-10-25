import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Needed to avoid "chart is not defined" errors

const HealthTrends = ({ graphData, cardsData }) => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (graphData) {
            setChartData(graphData);
            setLoading(false);
        } else {
            setError(true);
        }
    }, [graphData]);

    console.log('graphData', graphData)

    const createChartOptions = (data) => {
        const values = data.data.map(d => d.value.singleValue);
        const dates = data.data.map(d => {
            const date = new Date(d.date);
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        });

        return {
            labels: dates,
            datasets: [{
                label: `${data.title} Trends`,
                data: values,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.4, // Makes the line smooth
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        };
    };

    const getMinMax = (graphData) => {
        const values = graphData?.data?.map(d => d.value.singleValue);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return { min, max };
    }

    const { min, max } = getMinMax(graphData);

    const chartOptions = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: `${chartData?.title} Ranges`
                },
                min: min > 10 ? min - 10 : 0, // Adjust based on your data range
                max: max ? max + 10 : 0, // Can be dynamic based on your dataset
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.raw} ${chartData?.unit}`; // Customize tooltip suffix
                    }
                }
            },
            legend: {
                position: 'bottom', // Set legend position to bottom
            },
        },
        onClick: (e, elements) => {
            if (elements.length > 0) {
                const chart = elements[0];
                const resourceId = chartData.data[chart.index].resourceId.singleId;
                window.location.href = `/pw/patient-data/vitalsigns/${resourceId}`;
            }
        }
    };

    const TrendStatus = ({ status }) => {
        let statusContent;
        let currentStatus = (status && status.status) || status ;
        switch (currentStatus) {
            case 'low':
                statusContent = (
                    <div className="blue ">
                        <i className="fas fa-exclamation-circle"></i>
                        <p>Low</p>
                    </div>
                );
                break;
            case 'normal':
                statusContent = (
                    <div className="green ">
                        <i className="fas fa-check-circle"></i>
                        <p>Normal</p>
                    </div>
                );
                break;
            case 'high':
                statusContent = (
                    <div className="red ">
                        <i className="fas fa-exclamation-circle"></i>
                        <p>High</p>
                    </div>
                );
                break;

            case 'underweight':
                statusContent = (
                    <div className="yellow">
                        <i className="fas fa-exclamation-circle"></i>
                        <p>Underweight</p>
                    </div>
                );
                break;

            case 'Healthy':
                statusContent = (
                    <div className="green">
                        <i className="fas fa-check-circle"></i>
                        <p>Healthy</p>
                    </div>
                );
                break;

            case 'overweight':
                statusContent = (
                    <div className="orange">
                        <i className="fas fa-exclamation-circle"></i>
                        <p>Overweight</p>
                    </div>
                );
                break;

            case 'obese':
                statusContent = (
                    <div className="red">
                        <i className="fas fa-exclamation-circle"></i>
                        <p>Obese</p>
                    </div>
                );
                break;


            case 'N/A':
                statusContent = '';
                break;

            default:
                statusContent = (
                    <div className="red ">
                        <i className="fas fa-times-circle"></i>
                        <p>Error</p>
                    </div>
                );
        }
    
        return (
            <div id="trend-status">
                {statusContent}
            </div>
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data.</div>;
    }

    return (
        <div className='container mt-8 pt-4'>
            <div className='row justify-content-between px-8'>
                <div className="col-12 col-lg-9 ">
                    <h3 className='text-center'>Health Trends</h3>
                    <p className='text-center d-none d-md-block d-lg-block'>{graphData.title}</p>
                </div>
            </div>
            <div className='row justify-content-between px-md-8 px-lg-8'>
                <div className="col-12 col-lg-9 p-4">
                    <div className="chart-container border rounded shadow p-4" style={{ width: '100%', height: '100%', margin: '0 auto' }}>
                        <div className='row px-2'>
                            <div className="col-8 col-lg-8 d-none d-md-block d-lg-block">
                                <h6 className="text-left">{graphData.title}</h6>
                                <p className="text-left">{graphData.description}</p>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2">
                                <h6 className="text-center">Latest</h6>
                                <p className="text-center">{graphData.latestResult.value.singleValue} {graphData.unit}</p>
                            </div>
                            {
                                graphData?.latestResult?.status != 'N/A' && (
                                <div className="col-6 col-md-2 col-lg-2">
                                    <h6 className="text-center mb-0">Status</h6>
                                    <p className="text-center">
                                        <TrendStatus status={graphData?.latestResult?.status} />
                                    </p>
                                </div>)
                            }
                        </div>
                        <Line data={createChartOptions(chartData)} options={chartOptions} />
                    </div>
                </div>

                <div className="col-12 col-lg-3 p-4 d-flex gap-4 flex-row flex-lg-column">
                    {cardsData.map((card, index) => (
                        <div key={index} className="card border rounded pt-4 shadow w-100">
                            <h4 className="card-title text-center">{card.title}</h4>
                            {
                                card?.type == 'links' ? 
                                <div className="card-body">
                                    <ul >
                                        {card.content.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                :
                                <div className="card-body">
                                    <p>{card.content}</p>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HealthTrends;
