import type { Metadata } from "next";
import { Yeon_Sung, Dongle, Gowun_Dodum } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { IMAGE_OGP } from "@/constants/constant";
import { convertGoogleImage } from "@/utils/imageUtil";

const yeonSung = Yeon_Sung({
  subsets: ["latin"],
  weight: ["400"],
});

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "관우 ❤ 세란 결혼합니다.",
  description: "저희의 첫 걸음, 그 순간이 되어주세요.",
  openGraph: {
    title: "관우 ❤ 세란 결혼합니다.",
    description: "저희의 첫 걸음, 그 순간이 되어주세요.",
    url: "https://kw-sr.vercel.app",
    images: [
      {
        url: convertGoogleImage(IMAGE_OGP),
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
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <body className={`${gowunDodum.className} ${yeonSung.className} ${dongle.className}`}>{children}</body>
    </html>
  );
}
