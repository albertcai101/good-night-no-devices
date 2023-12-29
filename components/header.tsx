import { UserButton } from "@clerk/nextjs";

const Header = () => {
    return <div className="flex justify-between items-center w-full">
        <div className="flex-grow text-center">
            <h1 className="text-2xl font-semibold text-gray-500">Good Night No Devices</h1>
        </div>
        <UserButton afterSignOutUrl="/" />
    </div>
}

export default Header;
    