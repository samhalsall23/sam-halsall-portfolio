"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { cn } from "@/src/lib/utilities/cn";

type AnimateOnScrollWrapperProps = {
    children: ReactNode;
    className?: string;
};

export default function AnimateOnScrollWrapper(
    props: AnimateOnScrollWrapperProps
) {
    // === PROPS ===
    const { children, className } = props;

    // === REF ===
    const ref = useRef<HTMLDivElement>(null);

    // === HOOKS ===
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 92%", "start 60%"],
    });

    const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const rawY = useTransform(scrollYProgress, [0, 1], [16, 0]);
    const rawScale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

    const opacity = useSpring(rawOpacity, { stiffness: 220, damping: 28 });
    const y = useSpring(rawY, { stiffness: 220, damping: 28 });
    const scale = useSpring(rawScale, { stiffness: 220, damping: 28 });

    return (
        <motion.div
            ref={ref}
            className={cn(className)}
            style={{ opacity, y, scale }}>
            {children}
        </motion.div>
    );
}
