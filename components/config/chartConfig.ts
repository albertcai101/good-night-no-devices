import { ChartData, ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
    elements: {
        line: {
            tension: 0.2 // Smoothness of the line
        }
    }
};
