import type { Metadata } from "next";
import { BaseSection, HeadingGroup, HeroSection } from "@/components/layout";
import {
    ClientProject,
    ContactSection,
    ExperienceSection,
    FlagshipProject,
    TechnicalSkillsSection,
} from "@/components/common";
import { SECTION_IDS } from "@/lib/constants/nav";
import {
    NextjsIcon,
    ReactIcon,
    SassIcon,
    TailwindIcon,
} from "@/components/icon";
import {
    JACK_TODD_DESIGN_GITHUB_LINK,
    JACK_TODD_DESIGN_LINK,
    TAI_ELECTRICAL_GITHUB_LINK,
    TAI_ELECTRICAL_LINK,
} from "@/lib/constants/project-links";

export const metadata: Metadata = {
    title: "Sam Halsall | Portfolio",
    description:
        "Portfolio of Sam Halsall, front-end engineer specialising in React, Next.js, and TypeScript.",
};

export default function Home() {
    return (
        <main>
            <div className="relative z-10">
                <HeroSection />

                <BaseSection
                    id={SECTION_IDS.Projects}
                    className="bg-background">
                    <HeadingGroup
                        subtitle="FLAGSHIP PROJECT"
                        title="Full-Stack Product Engineering"
                    />

                    <FlagshipProject />
                </BaseSection>

                <div className="py-8 bg-background" />

                <BaseSection id="client-work" className="bg-background">
                    <HeadingGroup
                        subtitle="CLIENT WORK"
                        title="Contracted Front-end Development"
                    />
                    <ul className="flex flex-col gap-8">
                        <li>
                            <ClientProject
                                siteHref={TAI_ELECTRICAL_LINK}
                                githubHref={TAI_ELECTRICAL_GITHUB_LINK}
                                imgSrc="/assets/tai-electrical.png"
                                title="⚡ Tai Electrical Services"
                                desc="Built and deployed a production website for a local electrical business, embedding live Google reviews, responsive layouts, and conversion-focused contact flows."
                                skills={[
                                    { skill: "React", icon: <ReactIcon /> },
                                    { skill: "Next.js", icon: <NextjsIcon /> },
                                    {
                                        skill: "Tailwind",
                                        icon: <TailwindIcon />,
                                    },
                                ]}
                                backdrop={
                                    <>
                                        <div
                                            className="pointer-events-none absolute -right-16 -top-14 h-72 w-72 scale-90 rounded-full bg-[radial-gradient(circle,#facc15_0%,#eab308_38%,rgba(234,179,8,0.2)_68%,transparent_100%)] opacity-25 blur-[70px] saturate-75 transition-all duration-350 ease-in-out group-hover:scale-110 group-hover:opacity-55 group-hover:saturate-100"
                                            aria-hidden="true"
                                        />
                                        <div
                                            className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 scale-90 rounded-full bg-[radial-gradient(circle,#fb923c_0%,#f97316_35%,rgba(249,115,22,0.22)_68%,transparent_100%)] opacity-25 blur-[72px] saturate-75 transition-all duration-350 ease-in-out group-hover:scale-110 group-hover:opacity-55 group-hover:saturate-100"
                                            aria-hidden="true"
                                        />
                                    </>
                                }
                            />
                        </li>
                        <li>
                            <ClientProject
                                darkMode
                                reverse
                                siteHref={JACK_TODD_DESIGN_LINK}
                                githubHref={JACK_TODD_DESIGN_GITHUB_LINK}
                                imgSrc="/assets/jacktodd-design.png"
                                title="🎨 Jack Todd Design"
                                desc="Developed and shipped a portfolio website for a graphic designer, bringing their visual identity to life with Next.js, Sass, and TypeScript, and an integrated contact form."
                                skills={[
                                    { skill: "React", icon: <ReactIcon /> },
                                    { skill: "Next.js", icon: <NextjsIcon /> },
                                    { skill: "Sass", icon: <SassIcon /> },
                                ]}
                                backdrop={
                                    <>
                                        <div
                                            className="pointer-events-none absolute -right-16 -top-14 h-72 w-72 scale-90 rounded-full bg-[radial-gradient(circle,#4ade80_0%,#22c55e_38%,rgba(34,197,94,0.2)_68%,transparent_100%)] opacity-25 blur-[70px] saturate-75 transition-all duration-350 ease-in-out group-hover:scale-110 group-hover:opacity-55 group-hover:saturate-100"
                                            aria-hidden="true"
                                        />
                                        <div
                                            className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 scale-90 rounded-full bg-[radial-gradient(circle,#60a5fa_0%,#3b82f6_35%,rgba(59,130,246,0.22)_68%,transparent_100%)] opacity-25 blur-[72px] saturate-75 transition-all duration-350 ease-in-out group-hover:scale-110 group-hover:opacity-55 group-hover:saturate-100"
                                            aria-hidden="true"
                                        />
                                    </>
                                }
                            />
                        </li>
                    </ul>
                </BaseSection>

                <div className="py-8 bg-background" />

                <ExperienceSection />

                <div className="py-8 bg-background" />

                <TechnicalSkillsSection />

                <div className="bg-transparent">
                    <div className="py-8 bg-background rounded-b-xl" />
                </div>
            </div>

            <div className="relative z-0">
                <ContactSection />
            </div>
        </main>
    );
}
