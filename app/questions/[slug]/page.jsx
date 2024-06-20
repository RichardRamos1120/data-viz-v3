"use client";
import React, { useEffect, useState, useRef } from 'react';
import { fetchData } from '@/app/utils/fetchData';
import MyChart from '@/app/components/MyChart';
import { useSearchParams } from 'next/navigation'



const processData = async (id) => {
    let raw = await fetchData(`https://data-viz-v3.vercel.app/data.csv`);
    // Get the current question data
    const result = raw.map((item) => item[`${id}`]);

    // Filter out the empty strings and count the same data
    const data = result.reduce((acc, curr) => {
        if (curr === "") return acc;
        if (!acc[curr]) {
            acc[curr] = 0;
        }
        acc[curr]++;
        return acc;
    }, {});

    return { data, raw }; // Return the counts object
};

export default function Page({ params }) {
    const searchParams = useSearchParams();
    const colors = [
        'rgb(109, 110, 112)',
        'rgb(215, 124, 42)',
        'rgb(217, 171, 39)',
        'rgb(112, 165, 138)',
        'rgb(3, 89, 127)',
        'rgb(194, 79, 53)',
        'rgba(45, 156, 219, 0.7)',
        'rgba(240, 98, 146, 0.8)',
        'rgba(78, 205, 196, 0.6)',
        'rgba(255, 159, 26, 0.7)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 77, 77, 0.6)',
        'rgba(64, 255, 208, 0.7)',
        'rgba(255, 204, 204, 0.8)',
        'rgba(135, 211, 124, 0.6)',
        'rgba(255, 193, 7, 0.7)',
        'rgba(255, 138, 101, 0.8)',
        'rgba(56, 173, 169, 0.6)',
        'rgba(255, 110, 64, 0.7)',
        'rgba(106, 76, 147, 0.8)',
        'rgba(253, 203, 110, 0.6)',
        'rgba(0, 184, 148, 0.7)',
        'rgba(0, 206, 201, 0.8)',
        'rgba(255, 159, 67, 0.6)',
        'rgba(232, 67, 147, 0.7)',
        'rgba(76, 207, 251, 0.8)',
        'rgba(245, 215, 110, 0.6)'
    ];

    const [labels, setLabels] = useState([]);
    const [datasets, setDatasets] = useState([]);
    const barType = useRef("bar");

    const id = params.slug;

    useEffect(() => {
    
        // Fetch the zones data
        async function getDataZones() {
            let chartData = await processData(id);
            let chartZones = await processData("zone");
            let chartZonesArea = Object.keys(chartZones.data);

            let chartAllData = Object.values(chartData.data);
            let labelsNew = Object.keys(chartData.data);

            const datasetsNew = [];

            for (let i = 0; i < chartZonesArea.length; i++) {
                // Filter the data each for zone
                let chartDataFiltered = chartData.raw.filter((item) => item["zone"] === chartZonesArea[i]);

                // Get the current question data
                const result = chartDataFiltered.map((item) => item[`${id}`]);

                // Count the same data
                const data = result.reduce((acc, curr) => {
                    if (curr === "") return acc;
                    if (!acc[curr]) {
                        acc[curr] = 0;
                    }
                    acc[curr]++;
                    return acc;
                }, {});

                let newChartAllData = Object.values(data);

                let randomColor = colors[Math.floor(Math.random() * colors.length)];

                datasetsNew.push({
                    label: chartZonesArea[i],
                    data: newChartAllData,
                    backgroundColor: colors[i],
                });
            }

            setLabels(labelsNew);
            setDatasets(datasetsNew);

            
        }

        //Fetch the Gender data
        async function getDataGender() {
            let chartData = await processData(id);
            let chartZones = await processData("Q46");
            let chartZonesArea = Object.keys(chartZones.data);

            let chartAllData = Object.values(chartData.data);
            let labelsNew = Object.keys(chartData.data);

            const datasetsNew = [];

            for (let i = 0; i < chartZonesArea.length; i++) {
                // Filter the data each for zone
                let chartDataFiltered = chartData.raw.filter((item) => item["Q46"] === chartZonesArea[i]);

                // Get the current question data
                const result = chartDataFiltered.map((item) => item[`${id}`]);

                // Count the same data
                const data = result.reduce((acc, curr) => {
                    if (curr === "") return acc;
                    if (!acc[curr]) {
                        acc[curr] = 0;
                    }
                    acc[curr]++;
                    return acc;
                }, {});

                let newChartAllData = Object.values(data);

                let randomColor = colors[Math.floor(Math.random() * colors.length)];

                datasetsNew.push({
                    label: chartZonesArea[i],
                    data: newChartAllData,
                    backgroundColor: colors[i],
                });
            }

            setLabels(labelsNew);
            setDatasets(datasetsNew);

            
        }

                //Fetch the Ethnicity data
        async function getDataEthnicity() {
                    let chartData = await processData(id);
                    let chartZones = await processData("Q45");
                    let chartZonesArea = Object.keys(chartZones.data);
        
                    let chartAllData = Object.values(chartData.data);
                    let labelsNew = Object.keys(chartData.data);
        
                    const datasetsNew = [];
        
                    for (let i = 0; i < chartZonesArea.length; i++) {
                        // Filter the data each for zone
                        let chartDataFiltered = chartData.raw.filter((item) => item["Q45"] === chartZonesArea[i]);
        
                        // Get the current question data
                        const result = chartDataFiltered.map((item) => item[`${id}`]);
        
                        // Count the same data
                        const data = result.reduce((acc, curr) => {
                            if (curr === "") return acc;
                            if (!acc[curr]) {
                                acc[curr] = 0;
                            }
                            acc[curr]++;
                            return acc;
                        }, {});
        
                        let newChartAllData = Object.values(data);
        
                        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        
                        datasetsNew.push({
                            label: chartZonesArea[i],
                            data: newChartAllData,
                            backgroundColor: colors[i],
                        });
                    }
        
                    setLabels(labelsNew);
                    setDatasets(datasetsNew);
        
                    
        }

                //Fetch the Income data
        async function getDataIncome() {
                    let chartData = await processData(id);
                    let chartZones = await processData("Q47");
                    let chartZonesArea = Object.keys(chartZones.data);
        
                    let chartAllData = Object.values(chartData.data);
                    let labelsNew = Object.keys(chartData.data);
        
                    const datasetsNew = [];
        
                    for (let i = 0; i < chartZonesArea.length; i++) {
                        // Filter the data each for zone
                        let chartDataFiltered = chartData.raw.filter((item) => item["Q47"] === chartZonesArea[i]);
        
                        // Get the current question data
                        const result = chartDataFiltered.map((item) => item[`${id}`]);
        
                        // Count the same data
                        const data = result.reduce((acc, curr) => {
                            if (curr === "") return acc;
                            if (!acc[curr]) {
                                acc[curr] = 0;
                            }
                            acc[curr]++;
                            return acc;
                        }, {});
        
                        let newChartAllData = Object.values(data);
        
                        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        
                        datasetsNew.push({
                            label: chartZonesArea[i],
                            data: newChartAllData,
                            backgroundColor: colors[i],
                        });
                    }
        
                    setLabels(labelsNew);
                    setDatasets(datasetsNew);
        
                    
        }

        if (searchParams.get('filter') === 'gender') {
            getDataGender();
        
        }else if (searchParams.get('filter') === 'ethnicity') {
            getDataEthnicity();
        }
        else if (searchParams.get('filter') === 'income') {
            getDataIncome();
        } 
        
        else getDataZones();





        return () => 0;


        
    }, [id, searchParams.get('filter')]); // Re-run effect when id or filterValue changes

    return (
        <section>
            <MyChart labels={labels} datasets={datasets} qTitle={id} barType={barType} />
        </section>
    );
}
