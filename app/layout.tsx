import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import ThemeProvider from "@/app/utils/ThemeProvider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajjad Mashhadi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="inter.className">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className=" dark:bg-gray-900   dark:text-gray-400 min-h-screen flex flex-row justify-center xl:justify-evenly xl:pl-[100px]">
            <div className="flex flex-col lg:gap-20 lg:flex-row w-[360px] sm:w-[580px] lg:w-[780px] xl:w-[1300px] lg:pt-[90px] pb-24 ">
              <Navbar />
              <div className="flex flex-col xl:flex-row items-center xl:items-start h-fit w-full justify-between">
                {children}
                <Image
                  className=" inline-block w-[400px] h-[400px] mt-[20px] "
                  width={400}
                  height={500}
                  alt="developer"
                  src="/blue-programmer.svg"
                />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
