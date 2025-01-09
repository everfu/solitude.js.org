import "@/styles/globals.css";
import "@/styles/sandpack.css";
import {Metadata, Viewport} from "next";
import {clsx} from "@nextui-org/shared-utils";

import {Providers} from "./providers";

import {Cmdk} from "@/components/cmdk";
import manifest from "@/config/routes.json";
import {siteConfig} from "@/config/site";
import {fonts} from "@/config/fonts";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Hexo",
    "Theme",
    "Solitude",
    "Docs",
    "Documentation",
    "Blog",
    "Everly",
    "伍十七"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "everfu",
      url: "https://x.com/everfu8",
    },
  ],
  creator: "everfu",
  alternates: {
    canonical: "https://solitude.js.org",
    types: {
      "application/rss+xml": [{url: "https://solitude.js.org/feed.xml", title: "Solitude RSS Feed"}],
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    {color: "#f4f4f5", media: "(prefers-color-scheme: light)"},
    {color: "#111111", media: "(prefers-color-scheme: dark)"},
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="zh-CN">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fonts.sans.variable,
          fonts.mono.variable,
        )}
      >
        <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
          <div className="relative flex flex-col" id="app-container">
            <Navbar mobileRoutes={manifest.mobileRoutes} routes={manifest.routes} />
            {children}
            <Footer />
          </div>
          <Cmdk />
        </Providers>
      </body>
    </html>
  );
}
