import type { Metadata } from "next";
import CaseStudyContent from "./page.mdx";

export const metadata: Metadata = {
    title: "Cartelle Case Study",
    description:
        "Technical case study for Cartelle, a custom ecommerce platform built with Next.js, Prisma, and Stripe.",
};

export default function CartelleCaseStudyPage() {
    return <CaseStudyContent />;
}
