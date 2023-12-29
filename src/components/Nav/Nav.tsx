import Image from "next/image";
import { Home } from "@/components/Icons";
import { Dashboard } from "@/components/Icons";
import { Settings } from "@/components/Icons";
import { Logout } from "@/components/Icons";
import { NavButton } from "@/components/NavButton";

export function Nav() {
  return (
    <nav className="bg-secondary rounded-r-2xl flex flex-col items-end py-6">
      <div className="p-2 bg-primary bg-opacity-25 rounded-xl self-center mb-3">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="block"
        />
      </div>

      <ul>
        <NavButton href="/">
          <Home />
        </NavButton>
        <NavButton href="/dashboard">
          <Dashboard />
        </NavButton>
        <NavButton href="/settings">
          <Settings />
        </NavButton>
        <NavButton href="/logout">
          <Logout />
        </NavButton>
      </ul>
    </nav>
  );
}
