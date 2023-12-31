import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex-grow text-center">
                {/* Wrap the header text in a Link component */}
                <Link href="/">
                    <span className="text-2xl font-semibold text-gray-500">Good Night No Devices</span>
                </Link>
            </div>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}

export default Header;
