import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Chessle",
  description: "Chess could be a puzzle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html >
  );
}
