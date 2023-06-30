import { MyProfilePic } from "@/components/MyProfilePic";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yong's Portfolio",
  description: "Created by Yong Kim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
