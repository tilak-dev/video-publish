import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import NavBar from "@/components/NavBar";
import HomeAsideLayout from "@/components/HomeAsideLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
        >
          <main>
            <div className="h-16 overflow-hidden">
              <NavBar />
            </div>
            <div className="flex h-[calc(100vh-4rem)]">
              <HomeAsideLayout />
              {children}
            </div>
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
