export const NAV_ITEMS = [
    { label: "Home", id: "hero" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
export type NavLabel = NavItem["label"];

export const SECTION_IDS = Object.fromEntries(
    NAV_ITEMS.map(({ label, id }) => [label, id])
) as Record<NavLabel, string>;
