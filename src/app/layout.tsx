import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartHR - Future Ready HR for Dynamic Workplace",
  description: "Streamline your HR processes with SmartHR's comprehensive platform. Manage employees, track performance, and boost productivity all in one place. Try free today!",
  keywords: "HR management, employee management, HR software, payroll, attendance tracking",
  authors: [{ name: "SmartHR Team" }],
  openGraph: {
    title: "SmartHR - Future Ready HR for Dynamic Workplace",
    description: "Streamline your HR processes with SmartHR's comprehensive platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
