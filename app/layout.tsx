import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vipin Pal | Python Developer - Automation, Trading Systems & Machine Learning",
  description: "I don't build features—I build weapons for your business arsenal. Specialized in algorithmic trading platforms, intelligent automation, and predictive ML models. 60+ hours saved monthly for clients. Sub-10-second trade execution. Based in Delhi. Ready to turn your vision into reality.",
  keywords: [
    "Vipin Pal",
    "Python Developer",
    "Python Developer Delhi",
    "Algorithmic Trading Systems",
    "Trading Bot Developer",
    "Crypto Trading Platform",
    "Machine Learning Engineer",
    "Business Automation Developer",
    "ETL Pipeline Developer",
    "FastAPI Developer",
    "AWS Deployment Expert",
    "Freelance Python Developer India",
    "Trading System Architect",
    "Automation Expert Delhi",
    "ML Models Developer",
    "Data Engineering",
    "Backend Developer Python",
    "Full Stack Python Developer"
  ],
  authors: [{ name: "Vipin Pal" }],
  creator: "Vipin Pal",
  publisher: "Vipin Pal",
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vipinpal.com",
    title: "Vipin Pal | Python Developer - Automation, Trading Systems & Machine Learning",
    description: "Expert Python developer specializing in algorithmic trading platforms, intelligent automation, and ML solutions. 60+ hours saved monthly for clients. Based in Delhi, India.",
    siteName: "Vipin Pal Portfolio",
    images: [
      {
        url: "https://www.vipinpal.com/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Vipin Pal - Python Developer Portfolio",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Vipin Pal | Python Developer - Automation, Trading Systems & Machine Learning",
    description: "Expert Python developer specializing in algorithmic trading platforms, intelligent automation, and ML solutions. Based in Delhi, India.",
    creator: "@vipinpal", // Replace with your Twitter handle if you have one
    images: ["https://www.vipinpal.com/twitter-image.jpg"], // Add your Twitter card image
  },

  // Robots meta tag
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

  // Verification for Google Search Console
  verification: {
    google: "google-site-verification=qc-5KhhUyBJkK83xytCqA9BQCLNOOIha8JfV5cQu9n8",
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.vipinpal.com",
  },

  // Additional metadata
  category: "Technology",
  classification: "Portfolio Website",
  
  // App-specific metadata
  applicationName: "Vipin Pal Portfolio",
  
  // Other useful metadata
  other: {
    "contact:email": "vipinpal7060@gmail.com",
    "contact:phone": "+91-7060298070",
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
  },
};

// Optional: Add structured data for rich snippets
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vipin Pal",
  "url": "https://www.vipinpal.com",
  "image": "https://www.vipinpal.com/profile-image.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/vipinpal70/",
    "https://github.com/vipinpal70",
  ],
  "jobTitle": "Python Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressCountry": "IN"
  },
  "email": "vipinpal7060@gmail.com",
  "telephone": "+91-7060298070",
  "description": "Expert Python developer specializing in algorithmic trading platforms, intelligent automation, and machine learning solutions.",
  "knowsAbout": [
    "Python",
    "Machine Learning",
    "Algorithmic Trading",
    "Business Automation",
    "FastAPI",
    "AWS",
    "Data Engineering",
    "ETL Pipelines"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Vellore Institute of Technology",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhopal",
      "addressCountry": "IN"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
