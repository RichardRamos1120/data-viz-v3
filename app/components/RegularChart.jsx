"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSearchParams } from 'next/navigation';

export default function RegularChart({ labels, datasets, qTitle, barType }) {
    const myChart = useRef(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        console.log(datasets);
        let regularChartLabel = [];
        let regularChartData = [];
        let regularChartbgColor = [];

        datasets.forEach((data) => {
            regularChartLabel.push(data.label);
            regularChartData.push(data.data[0]);
            regularChartbgColor.push(data.backgroundColor)
        });
        console.log(regularChartData);

        if (labels && datasets) {
            const chartInstance = new Chart(myChart.current, {
                type: barType.current || 'bar', // Ensure a valid chart type is provided
                data: {
                    labels: regularChartLabel,
                    datasets: [{
                        label: qTitle,
                        data: regularChartData,
                        backgroundColor: regularChartbgColor,
                        
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return () => {
                if (chartInstance) {
                    chartInstance.destroy();
                }
            };
        }
    }, [labels, datasets, qTitle, barType]);

    return (
        <canvas ref={myChart} id="myChart" width={800} height={600}></canvas>
    );
}
