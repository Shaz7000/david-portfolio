import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import PageTransition from "./components/PageTransition";
import DemoShell from "./DemoShell";
import MotionProvider from "@/providers/MotionProvider";
import NavProvider from "@/providers/NavProvider";
import { SITE } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <MotionProvider>
          <NavProvider>
            <DemoShell>
              <PageTransition>{children}</PageTransition>
            </DemoShell>
          </NavProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
