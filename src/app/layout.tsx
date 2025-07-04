import "@/styles/global.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Saranga Siriwardhana | Full Stack Developer Portfolio",
  description:
    "Saranga Siriwardhana - BSc Software Engineering Student & Junior Full Stack Developer at Unwir Pvt Ltd. Specializing in React, Next.js, TypeScript, MongoDB. View my projects and experience.",
  keywords: [
    "Saranga Siriwardhana",
    "Full Stack Developer",
    "Software Engineer",
    "Unwir Pvt Ltd",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Web Developer Sri Lanka",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Software Engineering Student",
  ].join(", "),
  authors: [{ name: "Saranga Siriwardhana" }],
  creator: "Saranga Siriwardhana",
  publisher: "Saranga Siriwardhana",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarangasiriwardhana.netlify.app",
    title: "Saranga Siriwardhana | Full Stack Developer Portfolio",
    description:
      "Saranga Siriwardhana - BSc Software Engineering Student & Junior Full Stack Developer at Unwir Pvt Ltd. Specializing in React, Next.js, TypeScript, MongoDB.",
    siteName: "Saranga Siriwardhana Portfolio",
    images: [
      {
        url: "https://sarangasiriwardhana.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saranga Siriwardhana - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saranga Siriwardhana | Full Stack Developer Portfolio",
    description:
      "BSc Software Engineering Student & Junior Full Stack Developer specializing in modern web applications",
    images: ["https://sarangasiriwardhana.netlify.app/og-image.jpg"],
    creator: "@saranga_dev",
  },
  alternates: {
    canonical: "https://sarangasiriwardhana.netlify.app",
  },
  category: "Technology",
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "application-name": "Saranga Siriwardhana Portfolio",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Saranga Siriwardhana",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning className={outfit.variable}>
      <head>
        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saranga Siriwardhana",
              jobTitle: "Full Stack Developer",
              url: "https://sarangasiriwardhana.netlify.app",
              sameAs: [
                "https://www.linkedin.com/in/saranga-siriwardhana-409494218/", // Replace with your LinkedIn
                "https://github.com/SarangaSiriwardhana9", // Replace with your GitHub
                "https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==", // Replace with your Twitter
              ],
              worksFor: {
                "@type": "Organization",
                name: "Unwir Pvt. Ltd.",
              },
              alumniOf: {
                "@type": "Organization",
                name: "SLIIT", // Replace with your university
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "MongoDB",
                "Express.js",
                "Full Stack Development",
                "Software Engineering",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
              },
            }),
          }}
        />

        {/* Preload critical resources */}
        <link rel='preload' href='/banner5.jpg' as='image' />
        <link rel='preload' href='/favicon.png' as='image' />

        {/* DNS prefetch for external domains */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//fonts.gstatic.com' />
      </head>
      <body suppressHydrationWarning className='bg-black font-outfit'>
        {children}
      </body>
    </html>
  );
}
