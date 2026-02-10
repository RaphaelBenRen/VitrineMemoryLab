"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Fonctionnalités", href: "/#features" },
    { name: "Support", href: "/support" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-[#1a163a]/80 backdrop-blur-xl border-b border-[var(--color-glass-border)]" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                        <Rocket size={24} className="group-hover:rotate-12 transition-transform" />
                    </div>
                    <span className="text-xl font-bold text-white">
                        MemoryLab Pro
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-[var(--color-brand-accent)] ${pathname === link.href ? "text-[var(--color-brand-accent)]" : "text-gray-300"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" variant="primary" onClick={() => window.open('https://apps.apple.com', '_blank')}>
                        Télécharger
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-[#1a163a]/95 backdrop-blur-xl border-b border-[var(--color-glass-border)]"
                    >
                        <div className="flex flex-col gap-6 p-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium transition-colors hover:text-[var(--color-brand-accent)] ${pathname === link.href ? "text-[var(--color-brand-accent)]" : "text-gray-300"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button size="md" variant="primary" onClick={() => window.open('https://apps.apple.com', '_blank')}>
                                Télécharger l'App
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
