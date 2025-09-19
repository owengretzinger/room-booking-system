import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  // display: 'swap',
  variable: "--font-kanit",
  weight: "400",
});

export const metadata: Metadata = {
  title: "McMaster Room Booking",
  description: "Book and manage study room reservations at McMaster University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
