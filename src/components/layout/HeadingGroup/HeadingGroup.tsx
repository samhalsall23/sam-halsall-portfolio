import AnimateOnScrollWrapper from "../AnimateOnScrollWrapper";

type HeadingGroupProps = {
    title: string;
    subtitle: string;
};

export function HeadingGroup(props: HeadingGroupProps) {
    // === PROPS ===
    const { title, subtitle } = props;

    return (
        <AnimateOnScrollWrapper className="py-8 mx-auto flex flex-col gap-y-3 w-full max-w-4xl">
            <h3 className="text-base font-normal text-muted capitalize">
                {subtitle}
            </h3>
            <h2 className="text-heading-2">{title}</h2>
        </AnimateOnScrollWrapper>
    );
}
