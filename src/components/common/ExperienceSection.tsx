import {
    AnimateOnScrollWrapper,
    BaseSection,
    HeadingGroup,
} from "@/components/layout";
import { SECTION_IDS } from "@/lib/constants/nav";

type ExperienceEntry = {
    title: string;
    date: string;
    summary: string;
    technologies: string[];
};

type ExperienceCompany = {
    title: string;
    date: string;
    roles: ExperienceEntry[];
};

const experienceData: ExperienceCompany[] = [
    {
        title: "Coles Group",
        date: "2022 – Present",
        roles: [
            {
                title: "Software Engineer (Store Team Platform Team)",
                date: "2024 – Present",
                summary:
                    "Leading front-end delivery for store-team products, focusing on reliable, scalable interfaces and reusable patterns used across squads.",
                technologies: [
                    "React",
                    "TypeScript",
                    "GraphQL",
                    "Next.js",
                    "Jest",
                    "Playwright",
                ],
            },
            {
                title: "Software Engineer (Graduate)",
                date: "2023 – 2024",
                summary:
                    "Built customer and internal features across online and platform teams, delivering production-ready UI improvements and developer tooling in a fast release cadence.",
                technologies: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "REST APIs",
                    "CI/CD",
                ],
            },
            {
                title: "Project Manager / Business Analyst (Graduate)",
                date: "2022 – 2023",
                summary:
                    "Supported delivery teams with agile planning, operational reporting, and process improvements that helped improve incident visibility and execution consistency.",
                technologies: ["ServiceNow", "Jira", "Confluence", "Agile"],
            },
        ],
    },
    {
        title: "IODM Limited",
        date: "2018 – 2020",
        roles: [
            {
                title: "IT Assistant",
                date: "2018 – 2020",
                summary:
                    "Contributed to software quality and internal operations by supporting QA workflows and maintaining reliable CRM data.",
                technologies: ["QA Testing", "SaaS", "CRM"],
            },
        ],
    },
];

export function ExperienceSection() {
    return (
        <BaseSection id={SECTION_IDS.Experience} className="bg-background">
            <AnimateOnScrollWrapper>
                <HeadingGroup
                    subtitle="EXPERIENCE"
                    title="Experience Snapshot"
                />

                <div className="mx-auto w-full max-w-4xl">
                    <div className="space-y-10">
                        {experienceData.map((company) => (
                            <section key={company.title} className="space-y-6">
                                <header className="flex flex-col gap-3 border-b border-default pb-4 sm:flex-row sm:items-end sm:justify-between">
                                    <h3 className="text-heading-3 text-primary">
                                        {company.title}
                                    </h3>
                                    <p className="text-label text-zinc-700">
                                        {company.date}
                                    </p>
                                </header>

                                <div className="space-y-5">
                                    {company.roles.map((role, index) => (
                                        <article
                                            key={`${company.title}-${role.title}`}
                                            className="relative space-y-2.5 pl-8 sm:pl-9">
                                            <span
                                                aria-hidden="true"
                                                className={`absolute left-[0.35rem] top-2 w-px bg-linear-to-b from-purple-500/50 via-fuchsia-500/25 to-blue-500/5 ${
                                                    index ===
                                                    company.roles.length - 1
                                                        ? "bottom-0"
                                                        : "-bottom-8"
                                                }`}
                                            />
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-linear-to-br from-purple-500 via-fuchsia-500 to-blue-500"
                                            />
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                                <h4 className="text-lg font-semibold leading-snug text-primary">
                                                    {role.title}
                                                </h4>
                                                <p className="text-sm text-zinc-700">
                                                    {role.date}
                                                </p>
                                            </div>
                                            <p className="text-body text-zinc-700">
                                                {role.summary}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {role.technologies.map(
                                                    (tech) => (
                                                        <span
                                                            key={`${role.title}-${tech}`}
                                                            className="rounded-full border border-default bg-zinc-100/70 px-2.5 py-1 text-xs font-medium text-secondary">
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </AnimateOnScrollWrapper>
        </BaseSection>
    );
}
