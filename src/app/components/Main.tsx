import Link from "next/link";

export default function Main() {
return(
    <div className="w-screen flex justify-between align-center bg-gray-900 text-white px-36">
            <div className="flex p-4 gap-6">
                <Link href="/" className="font-bold ">TypeNest</Link>
                <Link href="/">Home</Link>
                <Link href="/Stats">Stats</Link>
                <Link href="/Badges">Badges</Link>
                <Link href="/Typing">Typing</Link>
            </div>
            <div className="flex p-4 gap-6">
                <Link href="/Help">Help</Link>
                <Link href="/Profile">Profile</Link>
            </div>
       
    </div>
)
}