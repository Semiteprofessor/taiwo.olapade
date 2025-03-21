import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./page";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taiwoolapade.vercel.app"),
  title: {
    default: siteConfig.name,
    template: "%s - Software Engineer",
  },
  description: "Generated by create next app",

  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Software Engineer",
    "Taiwo Olapade",
    "Full Stack Developer",
    "Software Development",
    "React Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "React Native Developer",
    "Web Development",
    "Software Architecture",
    "Cloud Computing",
    "DevOps",
    "Node.js",
    "Python",
    "Golang",
    "GraphQL",
    "REST API",
    "Websockets",
    "Serverless",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "ElasticSearch",
    "RabbitMQ",
    "InfluxDB",
    "Grafana",
    "Prometheus",
    "Alertmanager",
    "Nginx",
    "Apache",
    "Load Balancer",
  ],

  authors: [
    {
      name: "Taiwo Olapade",
      url: "https://taiwoolapade.vercel.app",
    },
  ],
  creator: "Taiwo Olapade",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.ogImage,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@taiwoolapade",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable} antialiased`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
