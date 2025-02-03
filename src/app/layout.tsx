import type { Metadata } from "next";
import { Yeon_Sung, Dongle } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const yeonSung = Yeon_Sung({
  subsets: ["latin"],
  weight: ["400"],
});

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "관우 ❤ 세란 결혼합니다.",
  description: "저희의 첫 걸음을 축복해주세요.",
  openGraph: {
    title: "관우 ❤ 세란 결혼합니다.",
    description: "저희의 첫 걸음을 축복해주세요.",
    url: "https://kw-sr.vercel.app",
    images: [
      {
        url: "/ogp/1.jpg",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <link href="https://hangeul.pstatic.net/hangeul_static/css/maru-buri.css" rel="stylesheet" />
      </Head>
      <body className={`${yeonSung.className} ${dongle.className}`}>{children}</body>
    </html>
  );
}
