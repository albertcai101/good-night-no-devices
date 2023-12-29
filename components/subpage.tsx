import Link from "next/link";

type SubpageProps = {
    text: String
}

const Subpage: React.FC<SubpageProps> = ({ text }) => {
    return <main className="flex flex-col items-center justify-center flex-grow">
        <span className="mb-4 text-lg text-gray-400">{ text }</span>
        <Link href="/">
            <span className="text-lg cursor-pointer hover:text-gray-300">Home</span>
        </Link>
    </main>
};

export default Subpage;
