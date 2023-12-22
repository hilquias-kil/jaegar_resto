import Image from "next/image";
import Link from "next/link";
import { Home } from "@/components/Icons";
import { Dashboard } from "@/components/Icons";
import { Settings } from "@/components/Icons";
import { Logout } from "@/components/Icons";

export function Nav() {
  return (
    <nav className="bg-secondary rounded-r-2xl flex flex-col items-center py-6">
      <div className="p-2 bg-primary bg-opacity-25 rounded-xl">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="block"
        />
      </div>
      <Link href="/" className="fill-primary">
        <Home />
      </Link>
      <Link href="/dashboard" className="fill-primary">
        <Dashboard />
      </Link>
      <Link href="/settings" className="fill-primary">
        <Settings />
      </Link>
      <Link href="/logout" className="fill-primary">
        <Logout />
      </Link>
    </nav>
  );
}
