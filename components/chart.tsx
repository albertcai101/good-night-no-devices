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
                                    day: 'MM-dd'
                                }
                            },
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Sleep Duration'
                            },
                            ticks: {
                                // If you want to include buffer space above the highest data point
                                callback: function(value, index, values) {
                                    return value;
                                },
                                // Include some padding on the highest value
                                padding: 10
                            },
                            grace: '5%' // This property adds a percentage as padding above and below your data range
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
