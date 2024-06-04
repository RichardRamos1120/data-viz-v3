"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function MyChart({ labels, datasets, qTitle, barType}) {
    const myChart = useRef(null);

    useEffect(() => {
        if (labels && datasets) {
            const chartInstance = new Chart(myChart.current, {
                type: barType.current,
                data: {
                    labels: labels,
                    datasets: datasets
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
                            stacked: true
                        },
                        y: {
                            stacked: true,
                            min: 0
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