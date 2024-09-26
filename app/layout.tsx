import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import ThemeProvider from "@/app/utils/ThemeProvider";
import Image from "next/image";
import Dialogue from "./ui/dialogue";

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
          <div className=" dark:bg-gray-900   dark:text-gray-400 text-gray-700 min-h-screen flex flex-row justify-center xl:justify-evenly xl:pl-[100px] pb-[20px] ">
            <div className="flex flex-col xl:gap-20 xl:flex-row w-[360px] sm:w-[580px] lg:w-[780px] xl:w-[1300px] xl:pt-[70px] justify-between  ">
              <Navbar />

              <div className="w-fit xl:w-[800px] mt-[20px] xl:mt-0 h-fit bg-gray-50 dark:bg-[rgb(31_41_55_/_75%)] px-[20px] rounded-[10px] pb-[20px] ">
                {children}
              </div>

              <div className=" text-center relative">
                <Dialogue />
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
