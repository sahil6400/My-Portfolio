import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Bhardwaj | Full Stack Web & App Developer",
  description:
    "Sahil Bhardwaj is a full stack developer delivering web and mobile solutions using React, Next.js, WordPress, CodeIgniter, Ionic, PHP, Firebase, HTML, CSS, and JavaScript since 2020.",
  keywords: [
    "Sahil Bhardwaj",
    "Full Stack Developer",
    "Web Developer",
    "App Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "CodeIgniter Developer",
    "Ionic Developer",
    "PHP Developer",
    "Firebase Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Portfolio",
  ],
  authors: [{ name: "Sahil Bhardwaj" }],
  metadataBase: new URL("https://www.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Sahil Bhardwaj | Full Stack Developer Portfolio",
    description:
      "Professional portfolio of Sahil Bhardwaj showcasing web and app development experience, skills, and projects.",
    siteName: "Sahil Bhardwaj Portfolio",
    url: "https://www.example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Bhardwaj | Full Stack Developer",
    description:
      "Web and app developer portfolio with skills in React, Next.js, WordPress, CodeIgniter, Ionic, PHP, and Firebase.",
    creator: "@sahil6400",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sahil Bhardwaj",
              url: "https://www.example.com",
              sameAs: [
                "https://www.linkedin.com/in/sahil-bhardwaj-95919b199/",
                "https://github.com/sahil6400",
              ],
              jobTitle: "Full Stack Web & App Developer",
              description:
                "Experienced full stack development professional with expertise in React, Next.js, WordPress, CodeIgniter, Ionic, PHP, Firebase, and MySQL.",
              email: "sahilbhardwajdcs@gmail.com",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / IT Industry",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
