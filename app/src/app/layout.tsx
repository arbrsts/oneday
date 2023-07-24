import "./globals.css";
import { Roboto, Alegreya } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";

const inter = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "One Day",
  description: "Open-source mood tracker and mindfulness journal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen  pb-8 lg:px-12 container mx-auto  ${inter.variable} ${roboto.variable}`}
      >
        <Navbar />
        {children}
        <footer className="mt-20 flex justify-between">
            <div className="flex flex-col gap-2 font-medium capitalize tracking-wider">
                <div className="  ">PRIVACY & LEGAL</div>
                <div className="">CONTACT</div>
            </div>
            <div>© 2023 - One Day, All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
