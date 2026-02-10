"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Smartphone, Mail } from "lucide-react";

export default function DeletionPage() {
    return (
        <div className="container mx-auto px-6 py-20 min-h-screen text-[var(--color-brand-text-secondary)]">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Retour à l'accueil
            </Link>

            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Suppression de compte</h1>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-10">
                    <h2 className="text-xl font-semibold text-red-400 mb-2">Zone de Danger</h2>
                    <p className="text-sm text-red-200/80">
                        La suppression de votre compte est <strong>irréversible</strong>. Toutes vos données (flashcards générées, historiques de révision, préférences) seront définitivement effacées de nos serveurs Supabase.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">Comment procéder ?</h2>

                <div className="space-y-8">
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50 text-[var(--color-brand-accent)]">
                            <Smartphone size={100} className="opacity-10" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Smartphone size={20} className="text-[var(--color-brand-accent)]" />
                            1. Depuis l'application (Recommandé)
                        </h3>
                        <ol className="list-decimal pl-5 space-y-3 marker:text-[var(--color-brand-accent)]">
                            <li>Ouvrez l'application <strong>MemoryLab Pro</strong> sur votre iPhone.</li>
                            <li>Accédez à votre <strong>Profil</strong> via la barre de navigation.</li>
                            <li>Appuyez sur l'icône <strong>Paramètres</strong> (roue dentée).</li>
                            <li>Scrollez tout en bas et cliquez sur <span className="text-red-400 font-medium">Supprimer mon compte</span>.</li>
                            <li>Confirmez l'action dans la fenêtre modale.</li>
                        </ol>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Mail size={20} className="text-[var(--color-brand-accent)]" />
                            2. Par demande au Support
                        </h3>
                        <p className="mb-6 leading-relaxed">
                            Si vous n'avez plus accès à votre appareil iOS, vous pouvez demander la suppression manuelle de vos données par notre équipe.
                        </p>
                        <Button onClick={() => window.location.href = 'mailto:memorylab.app.contact@gmail.com?subject=Demande de suppression de compte DEFINITIVE'}>
                            Contacter le support (memorylab.app.contact@gmail.com)
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
