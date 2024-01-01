import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center">
            <div className="flex justify-center items-center space-x-3"> {/* This div will be a flex container */}
            <Link href="/view">
                <a className="gradient-text text-lg cursor-pointer">Charts</a> {/* Use 'a' tag for Link content */}
            </Link>
            <span className="text-gray-300">|</span>
            <p>Albert Cai</p>
            </div>
        </footer>
    );
};

export default Footer;
