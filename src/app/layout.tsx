import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500"],
  subsets: ["latin"],
	display: 'swap',
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
        className={`${montserrat.variable} antialiased mt-4 mb-6`}
      >
        <div id="myapp" className="md:container flex flex-col mx-4 sm:mx-8 md:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
