import "./globals.css";
import { Roboto, Alegreya } from "next/font/google";

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
        className={`px-4 pb-8 container mx-auto justify-center ${inter.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
