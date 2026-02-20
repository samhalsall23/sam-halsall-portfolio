import { ReactNode } from "react";

export type SkillPillProps = {
    skill: string;
    icon: ReactNode;
};

export function SkillPill(props: SkillPillProps) {
    // === PROPS ===
    const { skill, icon } = props;

    return (
        <div className="flex items-center gap-2 rounded-full bg-zinc-100/70 px-3 py-1 text-sm font-medium text-secondary">
            {icon}
            {skill}
        </div>
    );
}
