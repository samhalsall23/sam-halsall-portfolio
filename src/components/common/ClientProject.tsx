import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { SkillPill, SkillPillProps } from "../ui/SkillPill";
import { CustomLink } from "../ui/CustomLink";
import AnimateOnScrollWrapper from "../layout/AnimateOnScrollWrapper";

type ClientProjectProps = {
    darkMode?: boolean;
    backdrop: ReactNode;
    reverse?: boolean;
    siteHref: string;
    githubHref: string;
    imgSrc: string;
    skills: SkillPillProps[];
    title: string;
    desc: string;
};

export function ClientProject(props: ClientProjectProps) {
    /// === PROPS ===
    const {
        darkMode = false,
        backdrop,
        reverse = false,
        siteHref,
        githubHref,
        imgSrc,
        skills,
        title,
        desc,
    } = props;

    return (
        <AnimateOnScrollWrapper className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-default bg-white/70 backdrop-blur p-4 shadow-sm md:grid-cols-2 lg:gap-8">
            {/* Project Image Section */}
            <Link
                href={siteHref}
                className={`group relative w-full self-start overflow-hidden rounded-md bg-zinc-100/70 max-h-70 md:max-h-none md:h-full ${
                    reverse ? "lg:order-2" : ""
                }`}>
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
                {backdrop}

                <div className="relative mx-auto aspect-4/3 w-[95%] translate-x-4 translate-y-10 scale-95 transition-transform duration-300 ease-in-out group-hover:translate-y-8 group-hover:scale-100 sm:w-[92%] sm:translate-x-2">
                    <div
                        className={`flex h-6 items-center justify-between rounded-t-md px-4 z-20 relative ${
                            darkMode ? "bg-zinc-800" : "bg-zinc-50"
                        }`}>
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <span className="w-13" aria-hidden="true" />
                    </div>
                    <div className="relative w-full overflow-hidden rounded-b-md bg-white">
                        <Image
                            className="relative z-10 block h-auto w-full object-contain brightness-97% transition duration-300 ease-in-out group-hover:brightness-100"
                            src={imgSrc}
                            alt={title}
                            width={1280}
                            height={960}
                        />
                    </div>
                </div>
            </Link>

            {/* Description */}
            <div
                className={`w-full px-2 lg:my-auto ${
                    reverse ? "lg:order-1" : ""
                }`}>
                {/* <p className="text-sm font-normal uppercase tracking-widest text-secondary">
                    {titleHeader}
                </p> */}
                <div>
                    <h3 className="mt-3 text-heading-3">{title}</h3>
                </div>

                {/* Tech stack */}
                <div className="mt-5">
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.map((item) => (
                            <SkillPill
                                key={item.skill}
                                skill={item.skill}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                </div>

                {/* Positioning statement */}
                <p className="mt-4 text-body text-secondary">{desc}</p>

                {/* CTA section */}
                <div className="mt-6 flex flex-col gap-3 border-t border-subtle pt-4 sm:flex-row sm:items-center">
                    <CustomLink
                        className="w-full"
                        href={siteHref}
                        text="View Site"
                    />
                    <CustomLink
                        className="w-full"
                        href={githubHref}
                        text="GitHub"
                        variant="secondary"
                    />
                </div>
            </div>
        </AnimateOnScrollWrapper>
    );
}
