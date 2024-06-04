"use client";
import React, { useEffect, useState, useRef } from 'react';
import { fetchData } from '@/app/utils/fetchData';
import MyChart from '@/app/components/MyChart';


const processData = async (id) => {
    let raw = await fetchData(`https://data-visual-v2.vercel.app/MWPA_Survey3_1.csv`);
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

export default function Page({ params, filterValue }) {
    const colors = [
        'rgb(109, 110, 112)',
        'rgb(215, 124, 42)',
        'rgb(217, 171, 39)',
        'rgb(112, 165, 138)',
        'rgb(3, 89, 127)',
        'rgb(194, 79, 53)'
    ];

    const [labels, setLabels] = useState([]);
    const [datasets, setDatasets] = useState([]);
    const barType = useRef("bar");

    const id = params.slug;

    useEffect(() => {
        console.log("Filter Value:", filterValue); // Logging filterValue
        async function getData() {
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
                    backgroundColor: randomColor,
                });
            }

            setLabels(labelsNew);
            setDatasets(datasetsNew);

            if (labelsNew.length >= 10) barType.current = "pie";
        }
        getData();
    }, [id, filterValue]); // Re-run effect when id or filterValue changes

    return (
        <section>
            <MyChart labels={labels} datasets={datasets} qTitle={id} barType={barType} />
        </section>
    );
}
