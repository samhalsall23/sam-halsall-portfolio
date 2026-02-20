import Image from "next/image";
import Link from "next/link";

import { SkillPill } from "../ui/SkillPill";
import {
    NextjsIcon,
    PrismaIcon,
    ReactIcon,
    StorybookIcon,
    StripeIcon,
    TailwindIcon,
} from "../icon";
import { CustomLink } from "../ui/CustomLink";
import { ProjectLinks } from "../ui/ProjectLinks";
import AnimateOnScrollWrapper from "../layout/AnimateOnScrollWrapper";

export function FlagshipProject() {
    return (
        <AnimateOnScrollWrapper className="flex w-full max-w-4xl mx-auto flex-col overflow-hidden rounded-2xl border border-default bg-white p-4 shadow-sm">
            {/* Project Image Section */}
            <Link
                href="#"
                className="group max-h-65 bg-zinc-100/70 rounded-md w-full relative overflow-hidden">
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
                    className="pointer-events-none absolute -right-16 -top-14 h-72 w-72 scale-90 rounded-full bg-[radial-gradient(circle,#8b5cf6_0%,#7c3aed_38%,rgba(124,58,237,0.18)_68%,transparent_100%)] opacity-25 blur-[70px] saturate-75 transition-all duration-350 ease-in-out group-hover:scale-110 group-hover:opacity-55 group-hover:saturate-100"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 scale-90 rounded-full bg-[radial-gradient(circle,#60a5fa_0%,#3b82f6_35%,rgba(59,130,246,0.2)_68%,transparent_100%)] opacity-25 blur-[72px] saturate-75 transition-all duration-350 ease-in-out group-hover:scale-110 group-hover:opacity-55 group-hover:saturate-100"
                    aria-hidden="true"
                />
                <div className="relative translate-y-2.5 sm:translate-y-2 group-hover:translate-y-0 translate-x-6 transition-transform duration-300 ease-in-out scale-90 group-hover:scale-95 aspect-video mx-auto bg-">
                    <div className="flex h-8 md:h-10 items-center justify-between rounded-t-md bg-zinc-50 px-4 z-20 relative">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-[#ff5f57]" />
                            <span className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-[#febc2e]" />
                            <span className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-[#28c840]" />
                        </div>
                        <span className="hidden md:block text-caption text-muted">
                            Cartelle
                        </span>
                        <span className="w-13" aria-hidden="true" />
                    </div>
                    <Image
                        className="relative z-10 translate-y-3.5 sm:translate-y-2.5 md:translate-y-2 object-contain brightness-97% group-hover:brightness-100 transition duration-300 ease-in-out"
                        src="/assets/cartelle-productts-5.png"
                        alt="Cartelle Project"
                        fill
                    />
                </div>
            </Link>

            {/* Description */}
            <div className="mt-8 px-2 w-full max-w-4xl mx-auto">
                {/* Project identity */}
                {/* <div className="flex items-center gap-3">
                            🛒
                            <span className="text-sm uppercase tracking-widest text-secondary">
                                Cartelle E-commerce Platform
                            </span>
                        </div> */}

                <div>
                    <h3 className="text-heading-3">
                        Custom ecommerce storefront, checkout, and admin
                        platform
                    </h3>
                </div>

                {/* Tech stack */}
                <div className="mt-5">
                    <div className="mt-3 flex flex-wrap gap-2">
                        <SkillPill skill="React" icon={<ReactIcon />} />
                        <SkillPill skill="Next.js" icon={<NextjsIcon />} />
                        <SkillPill skill="Prisma" icon={<PrismaIcon />} />
                        <SkillPill skill="Stripe" icon={<StripeIcon />} />
                        <SkillPill skill="Tailwind" icon={<TailwindIcon />} />
                        <SkillPill skill="Storybook" icon={<StorybookIcon />} />
                    </div>
                </div>

                {/* Positioning statement */}
                <p className="mt-4 text-body text-secondary">
                    Built with React and Next.js, Cartelle gives non-technical
                    teams full control over products and operations, with Stripe
                    integrated for payments and a dedicated Storybook created
                    for reusable UI.
                </p>

                {/* CTA section */}
                <div className="mt-6 flex flex-col gap-5 border-t border-subtle pt-4 md:flex-row md:items-center md:justify-between">
                    <CustomLink
                        className="w-full md:w-auto"
                        href="#"
                        text="View case study"
                    />

                    <ProjectLinks
                        items={[
                            {
                                href: "#",
                                label: "Live Site",
                                ariaLabel: "Open Cartelle live site",
                            },
                            {
                                href: "#",
                                label: "Admin (Demo)",
                                ariaLabel: "Open Cartelle admin demo",
                            },
                            {
                                href: "#",
                                label: "Storybook",
                                ariaLabel: "Open Cartelle Storybook",
                            },
                            {
                                href: "#",
                                label: "GitHub",
                                ariaLabel: "Open Cartelle GitHub repository",
                            },
                        ]}
                    />
                </div>
            </div>
        </AnimateOnScrollWrapper>
    );
}
