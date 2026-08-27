import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { business } from "@/src/config/business";
import "./globals.css";

const display = Oswald({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });
const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://thegasmanfuel.com";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: "The Gas Man | Mobile Fuel Delivery", template: "%s | The Gas Man" },
  description: business.description,
  openGraph: { type: "website", siteName: "The Gas Man", title: "Skip the Pump. We Come to You.", description: "Mobile fuel delivery for the Greater Columbia area.", images: [{ url: "/og.png", width: 1733, height: 907, alt: "The Gas Man mobile fuel delivery truck" }] },
  twitter: { card: "summary_large_image", title: "Skip the Pump. We Come to You.", description: "Mobile fuel delivery for the Greater Columbia area.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.description,
  telephone: business.phone,
  email: business.email,
  address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.state, addressCountry: "US" },
  areaServed: business.serviceAreas.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
  ],
  sameAs: [business.social.facebook, business.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
