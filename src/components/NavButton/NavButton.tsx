'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactElement } from "react";

interface NavButtonProps {
  children: ReactElement;
  href: string;
}

export const NavButton = ({ children, href }: NavButtonProps) => {
  const pathname = usePathname();
  const active = pathname === href
  return (
    <li
      className={`h-[104px] w-[92px]  flex items-center last:absolute last:bottom-0 ${
        active ? "bg-[url('/nav-bt.svg')]" : ""
      }`}
    >
      <Link
        href={href}
        className={`fill-primary flex items-center justify-center w-[56px] h-[56px] rounded-lg hover:bg-nav transition-colors ml-3 ${
          active
            ? "bg-primary hover:bg-primary fill-white shadow-[0px_8px_24px_0px_rgba(234,124,105,0.32)]"
            : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
};
