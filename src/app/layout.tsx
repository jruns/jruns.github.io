import type { Metadata } from "next";
import { Poppins, Londrina_Solid } from "next/font/google";
import "./globals.css";

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina-solid",
  weight: "400",
  subsets: ["latin"],
});

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason Schramm's Portfolio",
  description: "Portfolio of Jason Schramm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${londrinaSolid.variable} antialiased mt-4 mb-6`}
      >
        <div className="md:container flex flex-col mx-4 sm:mx-8 md:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
