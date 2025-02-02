import type { Metadata } from "next";
import { Yeon_Sung } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const noto = Yeon_Sung({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link href="https://hangeul.pstatic.net/hangeul_static/css/maru-buri.css" rel="stylesheet" />
      </Head>
      <body className={noto.className}>{children}</body>
    </html>
  );
}
