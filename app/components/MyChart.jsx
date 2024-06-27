"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSearchParams } from 'next/navigation';

export default function MyChart({ labels, datasets, qTitle, barType }) {
    const myChart = useRef(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        console.log(datasets)
        console.log(searchParams.get('filter'))
        if (labels && datasets) {
            // Calculate totals for each label
            const totals = labels.map((_, i) => {
                return datasets.reduce((sum, dataset) => sum + (dataset.data[i] || 0), 0);
            });
            

            // Convert data to percentages, handling division by zero
            const percentageDatasets = datasets.map(dataset => {
                return {
                    ...dataset,
                    data: dataset.data.map((value, i) => {
                        if (totals[i] === 0) {
                            return 0; // or handle it in a different way if needed
                        }
                        return (value / totals[i]) * 100;
                    })
                };
            });

            // console.log(percentageDatasets);

            const chartInstance = new Chart(myChart.current, {
                type: barType.current,
                data: {
                    labels: labels,
                    datasets: percentageDatasets
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: qTitle
                        }
                    },
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            ticks: {
                                callback: function (value) {
                                    return value + '%'; // Display percentages on the y-axis
                                },
                            },
                            max: 100, // Maximum value for percentage
                        },
                    },
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
