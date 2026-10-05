import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wgu - WireGuard Configuration Assistant & Rotation Tool",
  description:
    "A lightweight command-line tool and daemon assistant to manage and randomly rotate WireGuard connections by country code or worldwide.",
  keywords: [
    "WireGuard",
    "VPN",
    "wgu",
    "wgd",
    "WireGuard rotation",
    "Mullvad",
    "Linux CLI",
    "VPN manager",
  ],
  authors: [{ name: "Joshua Cox", url: "https://github.com/joshuacox/wgu" }],
  other: {
    "google-adsense-account": "ca-pub-8973108060277483",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1H2CLH4R3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L1H2CLH4R3');
          `}
        </Script>

        {/* Google AdSense Script Prepared */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
