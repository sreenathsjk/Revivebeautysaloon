import { Html, Head, Main, NextScript } from 'next/document';

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Revive Beauty Saloon",
  "image": "https://revivebeautysaloon.in/og-image.jpg",
  "description": "Premium unisex salon in Hyderabad offering haircuts, hair coloring, keratin, facials, bridal makeup, manicure, pedicure and more at affordable prices.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500000",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.385044",
    "longitude": "78.486671"
  },
  "url": "https://revivebeautysaloon.in",
  "telephone": "+919999999999",
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/revivebeautysaloon",
    "https://www.facebook.com/revivebeautysaloon"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "120"
  },
  "hasMap": "https://maps.app.goo.gl/YOUR_PLACE_ID",
  "servesCuisine": "Beauty Services",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Card"
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta */}
        <meta name="description" content="Revive Beauty Saloon — Premium unisex salon in Hyderabad. Expert haircuts, hair coloring, keratin treatment, facials, bridal makeup & more. Book appointment online. Best salon near me." />
        <meta name="keywords" content="salon near me, best unisex salon Hyderabad, beauty salon Hyderabad, hair salon near me, bridal makeup Hyderabad, keratin treatment Hyderabad, hair coloring Hyderabad, facials near me, best salon near me, Revive Beauty Saloon" />
        <meta name="author" content="Revive Beauty Saloon" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0a0a0b" />

        {/* Open Graph */}
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Revive Beauty Saloon | Premium Salon in Hyderabad" />
        <meta property="og:description" content="Transform your look at Revive Beauty Saloon. Expert stylists, premium products, bridal makeup, hair coloring & more. Book now!" />
        <meta property="og:image" content="https://revivebeautysaloon.in/og-image.jpg" />
        <meta property="og:url" content="https://revivebeautysaloon.in" />
        <meta property="og:site_name" content="Revive Beauty Saloon" />
        <meta property="og:locale" content="en_IN" />
        <meta property="business:contact_data:street_address" content="Your Street Address" />
        <meta property="business:contact_data:locality" content="Hyderabad" />
        <meta property="business:contact_data:region" content="Telangana" />
        <meta property="business:contact_data:country_name" content="India" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revive Beauty Saloon | Premium Salon in Hyderabad" />
        <meta name="twitter:description" content="Expert stylists, premium products, bridal makeup & more. Book your transformation today!" />
        <meta name="twitter:image" content="https://revivebeautysaloon.in/og-image.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://revivebeautysaloon.in" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
