"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-[var(--color-glass-border)] bg-[#1a163a] pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-bold text-white mb-4">
                            MemoryLab Pro
                        </h3>
                        <p className="text-[var(--color-brand-text-secondary)] max-w-sm text-sm">
                            L'application ultime pour les étudiants ingénieurs.
                            Importez vos cours, générez des QCM par IA et maîtrisez vos examens.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm">Liens Rapides</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">Accueil</Link></li>
                            <li><Link href="/support" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm">Légal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">Politique de Confidentialité</Link></li>
                            <li><Link href="/deletion" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">Suppression des données</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--color-glass-border)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MemoryLab Pro. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};
