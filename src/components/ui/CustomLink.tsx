import Link from "next/link";

import { cn } from "@/src/lib/utilities/cn";

type CustomLinkProps = {
    className?: string;
    href: string;
    text: string;
    variant?: "primary" | "secondary";
};

export function CustomLink(props: CustomLinkProps) {
    // === PROPS ===
    const { className, href, text, variant = "primary" } = props;

    // === CLASSES ===
    const linkClasses = cn(
        className,
        "group inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium text-white shadow-sm transition ",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-white/70 text-zinc-600"
    );

    return (
        <Link href={href} className={linkClasses}>
            <span className="relative block h-5 overflow-hidden">
                {/* Original Text */}
                <span className="block transform transition-transform duration-200 ease-in-out group-hover:-translate-y-full">
                    {text}
                </span>
                {/* Replacement Text */}
                <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 block transform translate-y-full transition-transform duration-200 ease-in-out group-hover:translate-y-0">
                    {text}
                </span>
            </span>
        </Link>
    );
}
