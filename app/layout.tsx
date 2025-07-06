import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "USVI Softball League",
  description: "The official hub for scores, news, and league action across the Virgin Islands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
