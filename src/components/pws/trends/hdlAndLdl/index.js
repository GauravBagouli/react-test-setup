import React, { useEffect, useState } from 'react';
import HealthTrends from '../healthTrends';
const data = require('../dummyData.json');

const HeartRate = () => {

    function getData(id) {
        const heartRateData = data.trends.vitals.filter(trend => trend.trendID === id);
    
        // Check if heartRateData is not empty
        if (heartRateData.length === 0) {
            console.error(`No heart rate data found for trendID '${id}'`);
            return <div>No data available for heart rate trends.</div>;
        }
    
        // Ensure the data structure is as expected
        const firstHeartRateEntry = heartRateData[0];
        const { data: apiData, acceptedRange } = firstHeartRateEntry;
    
        if (!apiData || !Array.isArray(apiData)) {
            console.error("Invalid data format: expected an array of data points.");
            return <div>Invalid data format for heart rate trends.</div>;
        }
    
        // Transform the API data into a format suitable for Chart.js
        const transformedData = apiData.map((item) => {
            if (!item.date || !item.value || !item.resourceId) {
                console.warn("Incomplete data item:", item);
                return null; // Skip this item if data is incomplete
            }
            return {
                date: new Date(item.date).toISOString().split('T')[0], // Extract only the date part
                value: {
                    singleValue: item.value.singleValue || 0, // Provide default value if undefined
                },
                resourceId: {
                    singleId: item.resourceId.singleId || "", // Provide default value if undefined
                },
            };
        }).filter(Boolean); // Filter out null values from incomplete items

        return {
            trendID: id,
            title: firstHeartRateEntry?.title,
            description: firstHeartRateEntry?.description,
            latestResult: firstHeartRateEntry?.latestResult,
            acceptedRange: { 
                low: acceptedRange.low - 10 || 0, // Default to 0 if undefined
                high: acceptedRange.high + 10 || 0, // Default to 0 if undefined
            },
            data: transformedData,
        };
    }


    const cardsData = [
        {
            title: "What is Heart Rate?",
            content: "A normal resting heart rate for adults ranges from 60 to 100 beats per minute..."
        },
        {
            title: "Helpful Links",
            type: "links",
            content: [ {
                    title: "Blood Oxygen Levels",
                    link: "https://www.verywellhealth.com/blood-oxygen-levels-2884527"
                },
                {
                    title: "Blood Oxygen Levels",
                    link: "https://www.verywellhealth.com/blood-oxygen-levels-2884527"
                }
            ]
        }
    ];

    const graphData = getData("HRTRT");

    return (
        <>
            <HealthTrends graphData={graphData} cardsData={cardsData} />
        </>
    );
};

export default HeartRate;
