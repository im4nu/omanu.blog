import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://omanu.tech"),
  alternates: {
    canonical: "/",
  },
  title: "O manu | Engenheiro Front-end e web designer",
  description: "Desenvolvimento de sites e aplicativos web e mobile.",
  openGraph: {
    images: "/mobilePreview.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://omanu.tech" />
        <meta
          property="og:image"
          content="https://omanu.tech/mobilePreview.png"
        />

        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
      </head>
      <body
        className={`bg-slate-900 w-screen min-h-screen h-full flex ${[
          raleway.className,
          inter.className,
        ]}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
