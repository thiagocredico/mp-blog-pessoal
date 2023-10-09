import { livvic } from "@/utils/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`mb-4 flex items-center justify-center h-auto p-4 text-4xl ${livvic.className}`}>
      <Link href="/">
        <span className="text-blue-500">To</span><span>Blog</span>
        <br />
        <span >Or</span><span className="text-blue-500">Not</span>
        <br />
        <span className="text-blue-500">To</span><span>Blog</span>
      </Link>
    </nav>
  )
}