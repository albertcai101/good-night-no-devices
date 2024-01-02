import React, { useEffect, useRef } from 'react';
import { Chart, registerables, ChartData } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

type SleepChartProps = {
    data: ChartData<'line', number[], string>; // Specify the type for data
};

const SleepChart: React.FC<SleepChartProps> = ({ data }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartRef.current && data) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data,
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                // Configure your time settings here
                                unit: 'day',
                                tooltipFormat: 'yyyy-MM-dd',
                                displayFormats: {
                                    day: 'yyyy-MM-dd'
                                }
                            },
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Sleep Duration'
                            }
                        }
                    }
                }                
            });

            return () => chartInstance.destroy();
        }
    }, [data]);

    return <canvas ref={chartRef}></canvas>;
};

export default SleepChart;
