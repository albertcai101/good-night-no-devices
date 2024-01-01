import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex-grow text-center">
                <Link href="/">
                <span className="gradient-header">Good Night No Devices</span>
                </Link>
            </div>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default Header;
