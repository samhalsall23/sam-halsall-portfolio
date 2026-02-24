import {
    AnimateOnScrollWrapper,
    BaseSection,
    HeadingGroup,
} from "@/components/layout";
import { SECTION_IDS } from "@/lib/constants/nav";

export function TechnicalSkillsSection() {
    return (
        <BaseSection id={SECTION_IDS.Skills} className="bg-background">
            <div className="mx-auto w-full max-w-4xl space-y-4">
                <HeadingGroup
                    subtitle="SKILLS"
                    title="Technical Skills & Expertise"
                />

                <AnimateOnScrollWrapper className="space-y-5">
                    <div className="space-y-1.5">
                        <p className="text-caption uppercase tracking-wide text-muted">
                            Languages & Frameworks
                        </p>
                        <p className="text-body text-primary">
                            TypeScript · ReactJS · NextJS · HTML · CSS · Sass ·
                            Tailwind · Bootstrap
                        </p>
                    </div>

                    <div className="space-y-1.5">
                        <p className="text-caption uppercase tracking-wide text-muted">
                            State Management
                        </p>
                        <p className="text-body text-primary">Redux</p>
                    </div>

                    <div className="space-y-1.5">
                        <p className="text-caption uppercase tracking-wide text-muted">
                            API Technologies
                        </p>
                        <p className="text-body text-primary">GraphQL · REST</p>
                    </div>

                    <div className="space-y-1.5">
                        <p className="text-caption uppercase tracking-wide text-muted">
                            Tools & Platforms
                        </p>
                        <p className="text-body text-primary">
                            Azure · Git · CI/CD
                        </p>
                    </div>

                    <div className="space-y-1.5">
                        <p className="text-caption uppercase tracking-wide text-muted">
                            Testing & Quality Assurance
                        </p>
                        <p className="text-body text-primary">
                            Jest · Playwright
                        </p>
                    </div>

                    <div className="space-y-1.5">
                        <p className="text-caption uppercase tracking-wide text-muted">
                            Certification
                        </p>
                        <p className="text-body text-primary">
                            Azure Fundamentals - AZ900
                        </p>
                    </div>
                </AnimateOnScrollWrapper>
            </div>
        </BaseSection>
    );
}
