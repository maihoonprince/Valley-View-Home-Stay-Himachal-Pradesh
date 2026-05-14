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
  title: "Valley View Home Stay | Best Homestay in Sainj, Kullu, Himachal Pradesh",
  description: "Experience premium hospitality at Valley View Home Stay in Sainj Valley, Kullu, Himachal Pradesh. Ideal for work from home in Himachal, peaceful living, homestay in valley, and pristine mountain getaways. Hosted by Jhabe Ram.",
  keywords: [
    "himachal pradesh",
    "home stay",
    "home stay in himachal pradesh",
    "himachal",
    "homestay in kullu",
    "homestay in sainj",
    "home stay in india",
    "homestay",
    "homestay in valley",
    "living in himachal",
    "work from home in himachal",
    "Valley View Home Stay",
    "Jhabe Ram",
    "Sainj Valley homestay",
    "Kullu tourism",
    "peaceful retreat India",
    "best homestay in Himachal"
  ].join(", "),
  openGraph: {
    title: "Valley View Home Stay | Best Homestay in Sainj, Kullu, Himachal Pradesh",
    description: "Experience premium hospitality at Valley View Home Stay in Sainj Valley, Kullu. Ideal for work from home in Himachal, peaceful living, and pristine homestay in valley getaways.",
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
    title: "Valley View Home Stay | Best Homestay in Sainj, Kullu, Himachal Pradesh",
    description: "Experience premium hospitality at Valley View Home Stay in Sainj Valley. Ideal for work from home in Himachal, peaceful living, and pristine homestay in valley getaways.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Valley View Home Stay",
  "image": "https://images.unsplash.com/photo-1544325796-096057a62174?auto=format&fit=crop&q=80&w=2000",
  "description": "Experience premium hospitality at Valley View Home Stay in Sainj Valley, Kullu, Himachal Pradesh. Ideal for work from home in Himachal, peaceful living, and homestay in valley experiences.",
  "url": "https://valleyviewhomestay.com",
  "telephone": "+919805505056",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Village Sainj, P.O. & Tehsil Sainj",
    "addressLocality": "Sainj",
    "addressRegion": "Himachal Pradesh",
    "postalCode": "175134",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.7699,
    "longitude": 77.20786
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "priceRange": "₹2000 - ₹3500"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

