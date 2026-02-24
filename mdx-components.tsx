import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => (
            <h1 className="text-heading-2 text-primary" {...props} />
        ),
        h2: (props) => (
            <h2 className="text-heading-3 text-primary mt-8" {...props} />
        ),
        h3: (props) => (
            <h3
                className="text-xl font-semibold leading-snug text-primary mt-6"
                {...props}
            />
        ),
        p: (props) => <p className="text-body text-blog" {...props} />,
        ul: (props) => (
            <ul
                className="list-disc space-y-2 pl-5 text-body text-blog marker:text-muted"
                {...props}
            />
        ),
        ol: (props) => (
            <ol
                className="list-decimal space-y-2 pl-5 text-body text-blog marker:text-muted"
                {...props}
            />
        ),
        li: (props) => <li {...props} />,
        blockquote: (props) => (
            <blockquote
                className="border-l-2 border-default pl-4 text-body text-blog italic"
                {...props}
            />
        ),
        a: ({ href = "", ...props }: AnchorProps) => {
            if (href.startsWith("/")) {
                return (
                    <Link
                        href={href}
                        className="text-primary underline underline-offset-4 transition hover:text-blog"
                        {...props}
                    />
                );
            }

            return (
                <a
                    href={href}
                    className="text-primary underline underline-offset-4 transition hover:text-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                />
            );
        },
        pre: (props) => (
            <pre
                className="overflow-x-auto rounded-xl border border-default bg-zinc-950 px-4 py-3 text-zinc-100 sm:px-5 sm:py-4"
                {...props}
            />
        ),
        code: ({ className, ...props }) => {
            const isCodeBlock = Boolean(className?.includes("language-"));

            if (isCodeBlock) {
                return (
                    <code
                        className="text-xs sm:text-sm text-zinc-100"
                        {...props}
                    />
                );
            }

            return (
                <code
                    className="rounded bg-zinc-200/70 px-1.5 py-0.5 text-[0.85em] text-primary"
                    {...props}
                />
            );
        },
        ...components,
    };
}
