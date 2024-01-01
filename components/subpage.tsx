import Link from "next/link";

type SubpageProps = {
    text: String
}

const Subpage: React.FC<SubpageProps> = ({ text }) => {
    return <main className="flex flex-col items-center justify-center flex-grow">
        <span className="mb-8 text-lg text-gray-400">{ text }</span>
        <Link href="/">
            <span className="gradient-text text-lg cursor-pointer">Home</span>
        </Link>
    </main>
};

export default Subpage;
