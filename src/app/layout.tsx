import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadataBase = new URL("https://apexmediagroup.com");

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: {
    default: "Apex Media Group | Digital Strategy & Design",
    template: "%s | Apex Media Group"
  },
  description: "Apex Media Group is a full-service digital agency helping brands in Houston grow through strategy, design, and performance marketing.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexmediagroup.com",
    siteName: "Apex Media Group",
    title: "Apex Media Group | Digital Strategy & Design",
    description: "We combine data-driven strategy with world-class design to build digital experiences that scale.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Apex Media Group Office"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Media Group | Digital Strategy & Design",
    description: "We combine data-driven strategy with world-class design to build digital experiences that scale.",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"],
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
  verification: {
    google: "google_site_verification_code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Apex Media Group",
              "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2800 Post Oak Blvd, Suite 1500",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77056",
                "addressCountry": "US"
              },
              "url": "https://apexmediagroup.com",
              "telephone": "+17135550198",
              "priceRange": "$$$"
            })
          }}
        />
      </body>
    </html>
  );
}