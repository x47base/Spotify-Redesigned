import type { Metadata } from "next";
import localFont from "next/font/local";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css"

const helvetica = localFont({
  src: "./fonts/helvetica.woff",
  variable: "--font-helvetica",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spotify Redesigned",
  description: "This is an redesigned version of spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} antialiased bg-spotify-black`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
