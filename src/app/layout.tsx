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
  description: "관우 ❤ 세란 결혼합니다.",
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
        <meta property="og:title" content="모바일 청첩장" />
        <meta property="og:description" content="관우 ❤ 세란 결혼합니다." />
        <meta
          property="og:image"
          content="https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
        />
        <meta property="og:url" content="https://kw-sr.vercel.app" />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="관우 ❤ 세란 결혼합니다." />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <body className={`${yeonSung.className} ${dongle.className}`}>{children}</body>
    </html>
  );
}
