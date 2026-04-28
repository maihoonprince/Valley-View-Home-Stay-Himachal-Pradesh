import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Valley View Home Stay | Sainj Valley",
  description: "Experience Serenity in Sainj Valley. Valley View Home Stay – Your Home in the Himalayas. Book your stay now.",
  keywords: "Homestay in Sainj Valley, Kullu homestay, Himalayas, Valley View Home Stay, Jhabe Ram, Himachal Pradesh tourism, peaceful retreat",
  openGraph: {
    title: "Valley View Home Stay | Sainj Valley",
    description: "Your home in the Himalayas. Reconnect with nature in our peaceful, premium retreat.",
    url: "https://valleyviewhomestay.com",
    siteName: "Valley View Home Stay",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544325796-096057a62174?auto=format&fit=crop&q=80&w=2000",
        width: 1200,
        height: 630,
        alt: "Valley View Home Stay Hero Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valley View Home Stay | Sainj Valley",
    description: "Experience Serenity in Sainj Valley. Valley View Home Stay – Your Home in the Himalayas.",
    images: ["https://images.unsplash.com/photo-1544325796-096057a62174?auto=format&fit=crop&q=80&w=2000"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
