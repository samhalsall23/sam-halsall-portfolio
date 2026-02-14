import Image from "next/image";

import { BaseSection } from "../components/layout/BaseSection/BaseSection";
import HeroSection from "../components/layout/HeroSection/HeroSection";
import CustomLink from "../components/ui/CustomLink";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <HeroSection />

            <BaseSection id="projects">
                <div className="my-8 mx-auto flex flex-col gap-y-4 w-full max-w-4xl">
                    <h3 className="text-base font-normal text-muted">
                        FLAGSHIP PROJECT
                    </h3>
                    <h2 className="text-heading-2 mt-2">
                        Full-Stack Product Engineering
                    </h2>
                </div>

                <div className="flex w-full max-w-4xl mx-auto flex-col overflow-hidden rounded-2xl border border-default bg-white p-4">
                    {/* Project Image Section */}
                    <Link
                        href="#"
                        className="group bg-zinc-100/70 rounded-md w-full relative overflow-hidden">
                        {/* Pattern overlay - dots pattern */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `
            linear-gradient(rgb(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgb(0,0,0,0.05) 1px, transparent 1px)
        `,
                                backgroundSize: "32px 32px",
                            }}
                            aria-hidden="true"
                        />
                        <div
                            className="pointer-events-none absolute -bottom-1/4 right-1/2 h-80 w-80 group-hover:scale-130 transition-transform duration-300 ease-in-out -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fafafa_0%,#e4e4e7_20%,#a1a1aa_50%,#71717a_75%,#27272a_100%)] blur-3xl"
                            aria-hidden="true"
                        />
                        <div className="relative translate-y-8 group-hover:translate-y-6 translate-x-11 transition-transform duration-300 ease-in-out scale-90 group-hover:scale-95 aspect-video mx-auto bg-">
                            <div className="flex h-10 items-center justify-between border-b border-default rounded-t-md bg-zinc-50 px-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                                </div>
                                <span className="text-caption text-muted">
                                    Cartelle
                                </span>
                                <span className="w-13" aria-hidden="true" />
                            </div>
                            <Image
                                className="relative z-10 translate-y-4"
                                src="/assets/cartelle-project.png"
                                alt="Cartelle Project"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </Link>

                    {/* Description */}
                    <div className="mt-8 px-2 w-full max-w-4xl mx-auto">
                        {/* Project identity */}
                        <div className="flex items-center gap-3">
                            🛒
                            <span className="text-base font-semibold uppercase tracking-widest text-primary">
                                Cartelle E-commerce Platform
                            </span>
                        </div>

                        {/* Positioning statement */}
                        <p className="mt-4 text-body text-secondary">
                            A custom full-stack eCommerce platform built with
                            React and Next.js, designed to give non-technical
                            clients complete control without sacrificing
                            performance or design flexibility.
                        </p>

                        {/* Tech stack */}
                        <div className="mt-5">
                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="rounded-full border border-default bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                                    Next.js
                                </span>
                                <span className="rounded-full border border-default bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                                    React
                                </span>
                                <span className="rounded-full border border-default bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                                    Prisma
                                </span>
                                <span className="rounded-full border border-default bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                                    Tailwind
                                </span>
                                <span className="rounded-full border border-default bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                                    Stripe
                                </span>
                                <span className="rounded-full border border-default bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                                    Storybook
                                </span>
                            </div>
                        </div>

                        {/* Engineering highlights */}
                        <ul className="mt-6 space-y-2 text-body-sm text-secondary">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                                Custom storefront built with{" "}
                                <strong>Next.js + React</strong>, backed by{" "}
                                <strong>Prisma.</strong>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                                Integrated <strong>Stripe</strong> for secure
                                payments and real-world checkout flows.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                                Bespoke <strong>admin dashboard</strong> for
                                managing products, stock, and collections
                                without developer support.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                                Component library documented in{" "}
                                <strong>Storybook</strong> for scalable,
                                maintainable UI development.
                            </li>
                        </ul>

                        {/* CTA section */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
                            <CustomLink href="#" text="View case study" />

                            <nav
                                aria-label="Cartelle project links"
                                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                                <a
                                    href="#"
                                    aria-label="Open Cartelle live site"
                                    className="text-sm text-secondary opacity-80 transition duration-150 hover:underline hover:opacity-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
                                    Live Site <span aria-hidden="true">→</span>
                                </a>
                                <a
                                    href="#"
                                    aria-label="Open Cartelle admin demo"
                                    className="text-sm text-secondary opacity-80 transition duration-150 hover:underline hover:opacity-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
                                    Admin (Demo){" "}
                                    <span aria-hidden="true">→</span>
                                </a>
                                <a
                                    href="#"
                                    aria-label="Open Cartelle Storybook"
                                    className="text-sm text-secondary opacity-80 transition duration-150 hover:underline hover:opacity-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
                                    Storybook <span aria-hidden="true">→</span>
                                </a>
                                <a
                                    href="#"
                                    aria-label="Open Cartelle GitHub repository"
                                    className="text-sm text-secondary opacity-80 transition duration-150 hover:underline hover:opacity-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
                                    GitHub <span aria-hidden="true">→</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </BaseSection>
        </main>
    );
}
