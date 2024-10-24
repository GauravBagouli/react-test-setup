import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/trends.module.scss';

// Dynamically import Highcharts for client-side rendering
import Highcharts from 'highcharts';

const Trends = () => {
  const [loading, setLoading] = useState(true);
  const [bmiData, setBmiData] = useState(null);
  const [error, setError] = useState(false);

  const dummyData = {
    trendID: "BMI",
    title: "Body Mass Index (BMI)",
    description: "A measure of body fat based on height and weight.",
    latestResult: {
      value: { singleValue: 22.5 },
      status: "Healthy",
    },
    acceptedRange: {
      Underweight: { low: 0, high: 18.5 },
      Healthy: { low: 18.5, high: 24.9 },
      Overweight: { low: 25, high: 29.9 },
      Obese: { low: 30, high: 100 }
    },
    data: [
      { value: { singleValue: 22.5 }, date: '2024-09-01', resourceId: { singleId: '123' } },
      { value: { singleValue: 23 }, date: '2024-08-01', resourceId: { singleId: '124' } },
    ]
  };

  useEffect(() => {
    // Simulate API call using setTimeout
    setTimeout(() => {
      try {
        // Set the dummy data instead of real API data
        setBmiData(dummyData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  const renderStatus = (status) => {
    switch (status.toLowerCase()) {
      case 'underweight':
        return <div className={`${styles.yellow} ${styles.statusIcon}`}>Underweight</div>;
      case 'healthy':
        return <div className={`${styles.green} ${styles.statusIcon}`}>Healthy</div>;
      case 'overweight':
        return <div className={`${styles.orange} ${styles.statusIcon}`}>Overweight</div>;
      case 'obese':
        return <div className={`${styles.red} ${styles.statusIcon}`}>Obese</div>;
      default:
        return <div className={`${styles.red} ${styles.statusIcon}`}>Error</div>;
    }
  };

  const createChartBMI = () => {
    const dates = bmiData.data.map((d) => new Date(d.date).toLocaleDateString());
    const bmiValues = bmiData.data.map((d) => d.value.singleValue);

    Highcharts.chart('bmi-chart', {
      chart: { type: 'spline' },
      title: { text: null },
      xAxis: { categories: dates },
      yAxis: {
        title: { text: 'BMI Ranges' },
        plotBands: [
          { from: bmiData.acceptedRange.Underweight.low, to: bmiData.acceptedRange.Underweight.high, color: '#FFFF99', label: { text: 'Underweight' } },
          { from: bmiData.acceptedRange.Healthy.low, to: bmiData.acceptedRange.Healthy.high, color: '#99FF99', label: { text: 'Healthy' } },
          { from: bmiData.acceptedRange.Overweight.low, to: bmiData.acceptedRange.Overweight.high, color: '#FFCC99', label: { text: 'Overweight' } },
          { from: bmiData.acceptedRange.Obese.low, to: bmiData.acceptedRange.Obese.high, color: '#FF9999', label: { text: 'Obese' } },
        ]
      },
      series: [{ name: 'BMI', data: bmiValues }],
    });
  };

  useEffect(() => {
    if (bmiData) createChartBMI();
  }, [bmiData]);

  if (loading) {
    return (
      <div className={styles.loadingWrapper}>
        <i className="fas fa-spinner fa-pulse"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorWrapper}>
        <h1>Uh Oh, Something Went Wrong!</h1>
        <i className="fas fa-exclamation-circle tx-100 tx-danger"></i>
        <h2>We had trouble gathering the data.</h2>
      </div>
    );
  }

  return (
    <div className={`${styles.trendsWrapper} mt-8 pt-4`}>
      <div className="row">
        <div className="col-12 col-lg-9">
          <h3 className={styles.insightsHeader}>Health Trends</h3>
          <h5 className="text-center">Body Mass Index (BMI)</h5>
          <div className={`${styles.card} ${styles.plutoCard}`}>
            <div className={styles.chartWrapper}>
              <div className="row justify-content-between">
                <div className="col-12 col-md-8">
                  <h6 id="trend-title" className="card-title">{bmiData?.title}</h6>
                  <p id="trend-description" className="card-text">{bmiData?.description}</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <h6 className="card-title">Latest</h6>
                  <h5 id="trend-latest">{bmiData?.latestResult.value.singleValue}</h5>
                  <h6 className="card-title">Status</h6>
                  {renderStatus(bmiData?.latestResult.status)}
                </div>
              </div>
              <div className="card-body">
                <div id="bmi-chart"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <div className="row">
            <div className={`${styles.card} ${styles.plutoCard}`}>
              <h4 className="text-center">What is BMI?</h4>
              <p>
                Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by the square of the body height, expressed in kg/m².
              </p>
            </div>
            <div className={`${styles.card} ${styles.plutoCard}`}>
              <h5 className="text-center">Helpful Links</h5>
              <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank">CDC Body Mass Index (BMI)</a>
              <a href="https://blogs.webmd.com/webmd-doctors/20180501/7-ways-to-lower-your-bmi" target="_blank">WebMD Body Mass Index (BMI)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
