import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-6 py-20 min-h-screen text-[var(--color-brand-text-secondary)]">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Retour à l'accueil
            </Link>

            <div className="max-w-3xl mx-auto bg-[#1a163a]/50 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-[var(--color-glass-border)] shadow-xl">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Politique de Confidentialité</h1>
                <p className="text-xs text-gray-500 mb-10">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-sm">
                    <section>
                        <h2 className="text-lg font-bold text-white mb-2">1. Introduction</h2>
                        <p className="leading-relaxed">
                            MemoryLab Pro ("nous", "notre") s'engage à protéger votre vie privée.
                            Cette politique décrit comment nous collectons et traitons vos données lors de l'utilisation de notre application mobile iOS.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-2">2. Stockage des Données (Supabase)</h2>
                        <p className="leading-relaxed">
                            Toutes les données utilisateur (profils, historique, documents importés) sont stockées de manière sécurisée sur
                            <strong> Supabase</strong>, une infrastructure cloud respectant les normes de sécurité élevées (chiffrement au repos et en transit).
                            <br />
                            Nous ne stockons aucune donnée sensible non nécessaire au fonctionnement de l'application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-2">3. Utilisation de l'Intelligence Artificielle (OpenAI)</h2>
                        <p className="leading-relaxed">
                            MemoryLab Pro utilise l'API d'<strong>OpenAI</strong> pour générer des QCM, des flashcards et des résumés à partir de vos documents.
                            <br /><br />
                            <strong>Important :</strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Vos documents sont envoyés à OpenAI uniquement pour le traitement (génération) et ne sont pas conservés par OpenAI pour entraîner leurs modèles publics.</li>
                            <li>Nous ne partageons pas vos données avec d'autres tiers à des fins commerciales.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-2">4. Non-revente des Données</h2>
                        <p className="leading-relaxed">
                            Nous ne vendons, n'échangeons, ni ne louons vos données personnelles d'identification à des tiers. Jamais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-2">5. Deletion (Suppression)</h2>
                        <p className="leading-relaxed">
                            Vous conservez un contrôle total sur vos données. Vous pouvez demander la suppression intégrale de votre compte et de vos données associées à tout moment.
                            Voir la page <Link href="/deletion" className="text-[var(--color-brand-accent)] hover:underline">Suppression de compte</Link> pour plus de détails.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-white mb-2">6. Contact</h2>
                        <p>
                            Pour toute question relative à cette politique, veuillez contacter :<br />
                            <strong>Raphaël Benat Renucci</strong><br />
                            <a href="mailto:memorylab.app.contact@gmail.com" className="text-[var(--color-brand-accent)] hover:underline">memorylab.app.contact@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
