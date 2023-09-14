import Navbar from "@/components/Navbar";
import "./globals.css";
import {  DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ 
  variable: '--font-dm_sans',
  display: "swap",
  subsets: ["latin"] });


export const metadata = {
  title: "Film Flick",
  description: "Unlocking the Magic of Cinema, One Click at a Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
      
        {children}
      </body>
    </html>
  );
}
