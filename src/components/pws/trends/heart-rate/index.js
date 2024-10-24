import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
// import './YourStyles.css'; // Import your CSS file here

const HealthTrends = () => {
    const [heartRateData, setHeartRateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/pw/api/trends");
                const data = await response.json();
                const heartRateData = data.Data.Insights.trends.vitals.find(d => d.trendID === "HRTRT");

                if (!heartRateData) throw new Error("No heart rate data found");

                setHeartRateData(heartRateData);
                createChartHeartRate(heartRateData);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const createChartHeartRate = (data) => {
        if (!data || !data.data || data.data.length === 0) {
            throw new Error('Data is empty');
        }

        const heartRate = [];
        const dates = [];

        data.data.forEach(d => {
            heartRate.push({
                y: Math.round((d.value.singleValue + Number.EPSILON) * 100) / 100,
                resource_id: d.resourceId.singleId,
            });

            const date = new Date(d.date);
            dates.push(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
        });

        Highcharts.chart('heart-rate-chart', {
            chart: {
                type: 'spline',
                zoomType: 'x',
                scrollablePlotArea: {
                    minWidth: 100,
                    scrollPositionX: 1
                },
            },
            title: {
                text: null
            },
            xAxis: {
                type: 'datetime',
                categories: dates,
            },
            yAxis: {
                title: {
                    text: `${data.title} Ranges (BPM)`
                },
                plotBands: [
                    {
                        from: 0,
                        to: data.acceptedRange.low,
                        color: 'blue',
                        label: { text: 'Low', style: { color: '#606060' } }
                    },
                    {
                        from: data.acceptedRange.low + 0.001,
                        to: data.acceptedRange.high - 0.001,
                        color: 'green',
                        label: { text: 'Healthy', style: { color: '#606060' } }
                    },
                    {
                        from: data.acceptedRange.high,
                        to: 150,
                        color: 'red',
                        label: { text: 'High', style: { color: '#606060' } }
                    },
                ],
            },
            tooltip: {
                valueSuffix: '/min'
            },
            series: [{
                name: data.title,
                data: heartRate,
                point: {
                    events: {
                        click: function() {
                            window.location.href = '/pw/patient-data/vitalsigns/' + this.resource_id;
                        }
                    }
                },
            }]
        });
    };

    if (loading) {
        return (
            <div className="loading-wrapper">
                <i className="fas fa-spinner fa-pulse"></i>
            </div>
        );
    }

    if (error) {
        return (
            <div id="error-wrapper" className="text-center">
                <h1 className="text-center" style={{ fontWeight: 700 }}>
                    Uh Oh, <span style={{ textTransform: 'capitalize' }}>{/* User First Name */}</span>!
                </h1>
                <i className="fas fa-exclamation-circle tx-100 tx-danger" style={{ margin: '1rem auto' }}></i>
                <h2 className="mg-b-20 tx-danger">We had trouble gathering everything we need to create your personalized care plan.</h2>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h5 style={{ color: '#3b4863', marginBottom: '1rem' }}>
                        This looks like a problem on our end. We should have it resolved shortly.
                    </h5>
                    <p style={{ color: '#3b4863', marginBottom: '0.5rem' }}>
                        If the problem persists, please contact us at <a href="mailto: {/* Support Email */}">{/* Support Email */}</a>.
                    </p>
                    <p style={{ color: '#3b4863', marginBottom: '0.5rem' }}>
                        You can view more ways of contacting us on our <a href="/pws/help">help page</a>.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div id="trends-wrapper">
            <div className="row">
                <div className="col-12 col-lg-9">
                    <h3 className="insights-header" style={{ marginBottom: '0.25rem' }}>Health Trends</h3>
                    <h5 className="text-center" style={{ marginBottom: '0.75rem' }}>Heart Rate</h5>
                    <div className="card pluto-card" style={{ minHeight: '32.75rem' }}>
                        <div className="chart-wrapper" style={{ padding: '1rem' }}>
                            <div className="row justify-content-between trends-description">
                                <div className="col-12 col-md-8">
                                    <h6 id="trend-title" className="card-title trends-card-title">{heartRateData.title}</h6>
                                    <p id="trend-description" className="card-text">{heartRateData.description}</p>
                                </div>
                                <div className="col-12 col-md-4 text-center">
                                    <div className="row justify-content-end align-content-center trends-status">
                                        <div className="col-6">
                                            <h6 className="card-title" style={{ marginBottom: '0.5rem', whiteSpace: 'nowrap' }}>Latest</h6>
                                            <h5 id="trend-latest" style={{ whiteSpace: 'nowrap' }}>{heartRateData.latestResult.value.singleValue} bpm</h5>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="card-title trends-card-title" style={{ whiteSpace: 'nowrap' }}>Status</h6>
                                            <h6 id="trend-status">
                                                {heartRateData.latestResult.status === 'low' && <div className="blue trends-status-icon"><i className="fas fa-exclamation-circle"></i><p>Low</p></div>}
                                                {heartRateData.latestResult.status === 'normal' && <div className="green trends-status-icon"><i className="fas fa-check-circle"></i><p>Normal</p></div>}
                                                {heartRateData.latestResult.status === 'high' && <div className="red trends-status-icon"><i className="fas fa-exclamation-circle"></i><p>High</p></div>}
                                                {heartRateData.latestResult.status !== 'low' && heartRateData.latestResult.status !== 'normal' && heartRateData.latestResult.status !== 'high' && <div className="red trends-status-icon"><i className="fas fa-times-circle"></i><p>Error</p></div>}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="heart-rate-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="row justify-content-around">
                        <div className="col-12 card pluto-card trends-definition-card">
                            <h4 className="text-center">What is Heart Rate?</h4>
                            <p style={{ textIndent: '2rem' }}>A normal resting heart rate for adults ranges from 60 to 100 beats per minute. Generally, a lower heart rate at rest implies more efficient heart function and better cardiovascular fitness. For example, a well-trained athlete might have a normal resting heart rate closer to 40 beats per minute.</p>
                        </div>
                        <div className="col-12 card pluto-card" style={{ padding: '1rem' }}>
                            <h5 className="text-center">Helpful Links</h5>
                            <a className="pluto-link" href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/heart-rate/art-20045660" target="_blank" rel="noopener noreferrer">Mayo Clinic - Heart Rate</a>
                            <a className="pluto-link" href="https://www.heart.org/en/healthy-living/healthy-lifestyle/fitness/exercise-and-your-heart" target="_blank" rel="noopener noreferrer">American Heart Association - Exercise & Heart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthTrends;
