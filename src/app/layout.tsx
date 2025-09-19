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
  metadataBase: new URL("https://room-booking-system-blond.vercel.app"),
  title: {
    default: "McMaster Room Booking",
    template: "%s | McMaster Room Booking",
  },
  description:
    "Book, manage, and cancel study room reservations at McMaster University.",
  keywords: [
    "McMaster",
    "Room Booking",
    "Study Rooms",
    "Library Rooms",
    "Reservation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "McMaster Room Booking",
    description:
      "Book, manage, and cancel study room reservations at McMaster University.",
    url: "/",
    siteName: "McMaster Room Booking",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "McMaster Room Booking",
    description:
      "Book, manage, and cancel study room reservations at McMaster University.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
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
