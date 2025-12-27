import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Konfigurasi font Roboto
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"], 
  style: ["normal", "italic"], 
  subsets: ["latin"], 
  display: "swap", 
});

export const metadata: Metadata = {
  icons: {
    icon: "/Logo.png",
  },
  title: "Malgist - AI-Powered Crypto Portfolio Manager",
  description: "Malgist leverages AI to optimize your crypto portfolio across multiple chains, providing real-time insights and dynamic asset allocation for maximum returns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
