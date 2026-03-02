import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Sam Halsall | Front-End Engineer",
        template: "%s | Sam Halsall",
    },
    description:
        "Sam Halsall — Front-end React, Next.js, and TypeScript engineer",
    applicationName: "Sam Halsall Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
