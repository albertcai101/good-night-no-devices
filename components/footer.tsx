import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center">
            <div className="flex justify-center items-center space-x-3">
            <Link href="/view">
                <span className="gradient-text text-lg cursor-pointer">Charts</span>
            </Link>
                <span className="text-gray-300">|</span>
            <p>Albert Cai</p>
            </div>
        </footer>
    );
};

export default Footer;
