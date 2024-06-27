// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Roboto } from "next/font/google";
import LocalFontLoader from "next/font/local";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import AnimatedContentWrapper from "@/pages/components/AnimatedContentWrapper";


const Grenoble = LocalFontLoader({ variable: "--font-Grenoble", src: "../pages/fonts/Grenoble.ttf" });
const roboto = Roboto({ style: ["normal", "italic"], weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { description: "Online Food Delivery and Order", title: "Sizzle & Spice" };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${roboto.className} ${Helvetica.variable} ${Helvetica_Rounded.variable} ${Hatton_Bold.variable} ${Brittany_Signature.variable} ${Grenoble.variable} ${MaronRose.variable} font-Grenoble flex flex-col h-screen`}>
        <Providers>
          <Navbar />
          <AnimatedContentWrapper>{children}</AnimatedContentWrapper>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
