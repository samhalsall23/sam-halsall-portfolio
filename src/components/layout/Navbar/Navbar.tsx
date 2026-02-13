"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BaseSection } from "../BaseSection/BaseSection";

const navItems = ["Home", "Projects", "Experience", "Skills", "Contact"];

export default function Navbar() {
    // === STATE ===
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BaseSection id="navbar">
            {/* Full-screen overlay when mobile menu is open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden backdrop-blur-sm bg-white/10"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Desktop Navigation - centered */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
                <div className="mx-auto px-8 py-3 flex justify-center rounded-full backdrop-blur-md bg-white/15 shadow-md border border-white/20">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className="relative text-text-primary overflow-hidden">
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    className="group block relative h-6">
                                    {/* Original Text */}
                                    <span className="block transform transition-transform duration-200 ease-in-out group-hover:-translate-y-full">
                                        {item}
                                    </span>
                                    {/* Replacement Text */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-0 top-0 block transform translate-y-full transition-transform duration-200 ease-in-out group-hover:translate-y-0">
                                        {item}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu - animated container */}
            <motion.div
                className="fixed top-6 right-6 z-50 md:hidden backdrop-blur-xl overflow-hidden shadow-xl rounded-2xl"
                layout
                animate={{
                    background: isOpen
                        ? "rgba(255, 255, 255, 0.4)"
                        : "rgba(255, 255, 255, 0.1)",
                    width: isOpen ? "calc(100vw - 48px)" : "48px",
                    height: isOpen ? "auto" : "48px",
                    border: isOpen
                        ? "0.5px solid rgba(0, 0, 0, 0.2)"
                        : "0.5px solid rgba(255, 255, 255, 0.3)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex ml-auto h-12 w-12 items-center justify-center"
                    aria-label="Toggle menu">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                        <motion.span
                            className="block h-0.5 w-5 bg-zinc-900"
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 8 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block h-0.5 w-5 bg-zinc-900"
                            animate={{
                                opacity: isOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block h-0.5 w-5 bg-zinc-900"
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -8 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 pb-6">
                            <ul className="flex flex-col items-center space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="relative overflow-hidden">
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setIsOpen(false)}
                                            className="group block relative h-6 px-2">
                                            {/* Original Text */}
                                            <span>{item}</span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.div>
        </BaseSection>
    );
}
