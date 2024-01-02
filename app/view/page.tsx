"use client";
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Chart, ChartData, registerables } from 'chart.js';
import SleepChart from '@/components/chart';
import { useAuth } from '@clerk/nextjs';
Chart.register(...registerables);


interface SleepData {
    nightOf: string;  // Received as a string from the API
    sleepDuration: number;
}

export default function View() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [chartData, setChartData] = useState<ChartData<'line', number[], string>>({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        if (userId) {
            const fetchData = async (userId: string) => {
                const response = await fetch(`/api/posts?userId=${encodeURIComponent(userId)}`);
                const data: SleepData[] = await response.json();
                const formattedData = {
                    labels: data.map((d) => d.nightOf.split('T')[0]), // assuming nightOf is in ISO format
                    datasets: [{
                        label: 'Sleep Duration',
                        data: data.map((d) => d.sleepDuration),
                        borderColor: '#b8a3f6',
                        fill: false,
                        tension: 0.4
                    }]
                };
                setChartData(formattedData);
            };
    
            fetchData(userId);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen p-4">
            <Header />
            <main className="flex flex-col items-center justify-center flex-grow">
            <div className="max-w-5xl w-full mx-auto p-4">
                <SleepChart data={chartData} />
            </div>
            </main>
            <Footer />
        </div>
    );
}
