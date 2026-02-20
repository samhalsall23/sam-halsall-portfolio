import { BaseSection } from "../components/layout/BaseSection/BaseSection";
import { HeroSection } from "../components/layout/HeroSection/HeroSection";
import { HeadingGroup } from "../components/layout/HeadingGroup/HeadingGroup";
import { FlagshipProject } from "../components/common/FlagshipProject";
import { ClientProject } from "../components/common/ClientProject";
import { ExperienceSection } from "../components/common/ExperienceSection";
import { TechnicalSkillsSection } from "../components/common/TechnicalSkillsSection";
import { ContactSection } from "../components/common/ContactSection";
import {
    NextjsIcon,
    ReactIcon,
    SassIcon,
    StorybookIcon,
    StripeIcon,
    TailwindIcon,
} from "../components/icon";

export default function Home() {
    return (
        <main>
            <div className="relative z-10">
                <HeroSection />

                <BaseSection id="projects" className="bg-background">
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
                                siteHref="#"
                                githubHref="#"
                                imgSrc="/assets/tai-electrical.png"
                                title="⚡ Tai Electrical Services"
                                desc="Built and deployed a production website for a local electrical business, integrating Google reviews, responsive layouts, and conversion-focused contact flows."
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
                                siteHref="#"
                                githubHref="#"
                                imgSrc="/assets/jacktodd-design.png"
                                title="🎨 Jack Todd Design"
                                desc="Portfolio website for a graphic designer. Built with Next.js, Sass, and TypeScript, this site showcases the designer's work and features an integrated contact form."
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

                <div className="bg-foreground">
                    <div className="py-8 bg-background rounded-b-xl" />
                </div>
            </div>

            <div className="relative z-0">
                <ContactSection />
            </div>
        </main>
    );
}
