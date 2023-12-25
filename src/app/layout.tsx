import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Food App",
  description: "Food App description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <div className="grid bg-bg grid-cols-[104px_1fr_34%] h-screen">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
