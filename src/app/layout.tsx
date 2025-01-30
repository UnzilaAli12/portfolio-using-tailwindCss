import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Unzila Ali - Portfolio",
  description: "Professional Frontend Developer and Graphic Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='bg-gray-100 text-gray-900'>
          <Header/>
       <main className="pt-20 px-6 max-w-6xl mx-auto"> {children}</main>
       <Footer/>
      </body>
    </html>
  );
}
