import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppContext from "./components/context";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "800"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "800"],
});

export const metadata = {
  title: "Stove Africa | Lifestyle Utility Brand – Simple, Faster, Smarter",
  description: "Discover Stove Africa – a lifestyle utility app for gas delivery, bill payments, waste disposal & logistics. Life made simple, faster & smarter.",
  icons: {
    icon: "/logo.png",
  },
  keywords: [
    "Stove Africa",
    "Lifestyle Utility App",
    "Gas Delivery",
    "Bill Payments",
    "Waste Disposal",
    "Logistics Services",
    "Stove Africa",
    "Lifestyle Utility Brand",
    "Gas Delivery Nigeria",
    "Fuel Delivery App",
    "Online Bill Payment Nigeria",
    "Waste Disposal Service",
    "Logistics and Cargo Africa",
    "Everyday Utility Services",
    "Life Made Simple Faster Smarter"
  ],
  openGraph: {
    title: "Stove Africa | Lifestyle Utility Brand – Simple, Faster, Smarter",
    description: "Discover Stove Africa – a lifestyle utility app for gas delivery, bill payments, waste disposal & logistics. Life made simple, faster & smarter.",
    url: "https://stove.africa",
    siteName: "Stove Africa",
    images: [
      {
        url: "/stove.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stove Africa | Lifestyle Utility Brand – Simple, Faster, Smarter",
    description: "Discover Stove Africa – a lifestyle utility app for gas delivery, bill payments, waste disposal & logistics. Life made simple, faster & smarter.",
    images: ["/stove.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <AppContext>
       <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </AppContext>
  );
}
