import React, { useState, useEffect } from "react";
import Link from "next/link";

type SubpageProps = {
    text: String
}

const Subpage: React.FC<SubpageProps> = ({ text }) => {
    const [countdown, setCountdown] = useState(3); // Initialize countdown state

    useEffect(() => {
        // Set an interval to update the countdown every second
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex flex-col items-center justify-center flex-grow">
            <span className="text-lg text-gray-400">{ text }</span>
            <span className="m-8 text-lg text-gray-400">Redirecting home in {countdown} seconds.</span>
            <Link href="/">
                <span className="gradient-text text-lg cursor-pointer">Home</span>
            </Link>
        </main>
    );
};

export default Subpage;
