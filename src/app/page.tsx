import { BaseSection } from "../components/layout/BaseSection/BaseSection";
import HeroSection from "../components/layout/HeroSection/HeroSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <BaseSection id="projects">
                <div className="my-8 mx-auto fle flex-col gap-y-4 w-full max-w-4xl">
                    <h3 className="text-base font-normal text-muted">
                        FLAGSHIP PROJECT
                    </h3>
                    <h2 className="text-heading-2 mt-2">
                        Full-Stack Product Engineering
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        Designed and built a production-ready web application
                        from system architecture to polished UI. Focused on
                        performance, accessibility, and scalable backend design.
                    </p>
                </div>
            </BaseSection>
        </main>
    );
}
