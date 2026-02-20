import { BaseSection } from "../layout/BaseSection/BaseSection";
import { HeadingGroup } from "../layout/HeadingGroup/HeadingGroup";
import AnimateOnScrollWrapper from "../layout/AnimateOnScrollWrapper";

type ExperienceEntry = {
    title: string;
    date: string;
    points: string[];
};

type ExperienceCompany = {
    title: string;
    date: string;
    roles: ExperienceEntry[];
};

const experienceData: ExperienceCompany[] = [
    {
        title: "Coles Group",
        date: "Feb 2022 – Present",
        roles: [
            {
                title: "Software Engineer (Store Team Platform Team)",
                date: "Feb 2024 – Present",
                points: [
                    "Led front-end delivery of Location Manager, supporting rollout to 800+ stores and 100,000+ employees.",
                    "Built reusable React components adopted across multiple squads, reducing duplication and improving consistency across Wave features.",
                    "Led investigation and resolution of front-end production incidents, improving reliability for 100,000+ internal users.",
                    "Improved developer experience by restructuring GraphQL architecture and extending Plop generators to automate boilerplate creation.",
                    "Served as primary code reviewer and front-end lead, enforcing best practices and improving overall code quality.",
                    "Mentored 2 graduate engineers, accelerating their progression to independent contributors.",
                ],
            },
            {
                title: "Software Engineer (Graduate)",
                date: "Feb 2023 – Feb 2024",
                points: [
                    "**Coles Online (Aug 2023 – Feb 2024):** Developed customer-facing features using React, Next.js, TypeScript for a platform with 15M+ monthly visits. Implemented REST API calls with asynchronous TypeScript, handling loading states, errors, and edge cases. Collaborated with UX/UI designers to translate Figma designs into responsive, interactive web features. Delivered 35+ pull requests in a fast-paced weekly release cycle.",
                    "**Store Team Platform (Feb 2023 – Aug 2023):** Reduced technical debt by enhancing a DevOps extension in TypeScript, automating release note generation across 10+ repositories. Integrated the extension into CI/CD pipelines and authored technical documentation to facilitate adoption across teams.",
                ],
            },
            {
                title: "Project Manager / Business Analyst (Graduate)",
                date: "Feb 2022 – Feb 2023",
                points: [
                    "Built a ServiceNow dashboard to enhance visibility into incident root causes, reducing P2 incidents by 20%.",
                    "Increased sprint completion rates from 61% to 80%+ by creating well-defined user stories and applying agile best practices.",
                    "Streamlined architectural workflows with new forms and processes, facilitating strategic meetings with technology leaders.",
                ],
            },
        ],
    },
    {
        title: "IODM Limited",
        date: "Jun 2018 – Dec 2020",
        roles: [
            {
                title: "IT Assistant",
                date: "Jun 2018 – Dec 2020",
                points: [
                    "Improved release reliability by developing test suites for a global SaaS platform and managing CRM data accuracy for sales operations.",
                ],
            },
        ],
    },
];

function renderWithBold(text: string) {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
        const isBold = part.startsWith("**") && part.endsWith("**");

        if (isBold) {
            return (
                <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
            );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
    });
}

export function ExperienceSection() {
    return (
        <BaseSection id="experience" className="bg-background">
            <AnimateOnScrollWrapper>
                <HeadingGroup
                    subtitle="EXPERIENCE"
                    title="Professional Experience"
                />

                <div className="mx-auto w-full max-w-4xl">
                    <div className="space-y-12">
                        {experienceData.map((company) => (
                            <section key={company.title} className="space-y-7">
                                <header className="flex flex-col gap-3 border-b border-default pb-4 sm:flex-row sm:items-end sm:justify-between">
                                    <h3 className="text-heading-3 text-primary">
                                        {renderWithBold(company.title)}
                                    </h3>
                                    <p className="text-label text-zinc-700">
                                        {company.date}
                                    </p>
                                </header>

                                <div className="space-y-8">
                                    {company.roles.map((role, index) => (
                                        <article
                                            key={`${company.title}-${role.title}`}
                                            className="relative space-y-3 pl-8 sm:pl-9">
                                            <span
                                                aria-hidden="true"
                                                className={`absolute left-[0.35rem] top-2 w-px bg-linear-to-b from-purple-500/50 via-fuchsia-500/25 to-blue-500/5 ${
                                                    index ===
                                                    company.roles.length - 1
                                                        ? "bottom-0"
                                                        : "-bottom-12"
                                                }`}
                                            />
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-linear-to-br from-purple-500 via-fuchsia-500 to-blue-500"
                                            />
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                                <h4 className="text-lg font-semibold leading-snug text-primary">
                                                    {renderWithBold(role.title)}
                                                </h4>
                                                <p className="text-sm text-zinc-700">
                                                    {role.date}
                                                </p>
                                            </div>
                                            <ul className="list-disc space-y-2.5 pl-5 text-body text-zinc-700 marker:text-muted">
                                                {role.points.map((point) => (
                                                    <li key={point}>
                                                        {renderWithBold(point)}
                                                    </li>
                                                ))}
                                            </ul>
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
