import Link from "next/link";

import { cn } from "@/src/lib/utilities/cn";

type ProjectLinkItem = {
    href: string;
    label: string;
    ariaLabel: string;
};

type ProjectLinksProps = {
    className?: string;
    items: ProjectLinkItem[];
};

export function ProjectLinks(props: ProjectLinksProps) {
    const { className, items } = props;

    return (
        <nav
            aria-label="Cartelle project links"
            className={cn(
                "grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:flex md:w-auto md:flex-wrap md:items-center md:justify-end md:gap-x-5 md:gap-y-2",
                className
            )}>
            {items.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="inline-flex items-center justify-between rounded-full  border border-default bg-zinc-100/70 px-3 py-2 text-sm font-normal text-secondary md:text-primary opacity-90 transition duration-150 hover:bg-white hover:opacity-100 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:opacity-80 md:hover:bg-transparent md:hover:underline md:hover:opacity-100">
                    {item.label} →
                </Link>
            ))}
        </nav>
    );
}
