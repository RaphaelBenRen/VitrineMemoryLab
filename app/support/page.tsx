"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function SupportPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(data);
        reset();
    };

    return (
        <div className="container mx-auto px-6 py-20 min-h-screen">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Support & Aide</h1>
                <p className="text-[var(--color-brand-text-secondary)] text-lg">
                    Besoin d'assistance ? Contactez l'équipe de MemoryLab Pro.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

                {/* Contact Info */}
                <div className="space-y-6">
                    <Card className="hover:bg-white/5 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-accent)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Email Officiel</h3>
                                <p className="text-[var(--color-brand-text-secondary)] mb-4 text-sm">
                                    Pour toute demande technique ou commerciale (App Store Support).
                                </p>
                                <a href="mailto:memorylab.app.contact@gmail.com" className="text-[var(--color-brand-accent)] hover:underline font-medium">
                                    memorylab.app.contact@gmail.com
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card className="hover:bg-white/5 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[var(--color-brand-secondary)]/40 text-white">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Responsable</h3>
                                <p className="text-[var(--color-brand-text-secondary)] mb-1 text-sm">
                                    Raphaël Benat Renucci
                                </p>
                                <p className="text-xs text-gray-500">
                                    Lead Developer & Founder
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Contact Form */}
                <Card>
                    <h3 className="text-xl font-bold mb-6 text-white">Envoyez-nous un message</h3>

                    <AnimatePresence>
                        {isSubmitSuccessful ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-10 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Message envoyé !</h4>
                                <p className="text-gray-400">Nous vous répondrons dans les plus brefs délais.</p>
                            </motion.div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Nom complet</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full bg-[#1a163a] border border-[var(--color-glass-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-gray-600"
                                        placeholder="Votre nom"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">Ce champ est requis</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full bg-[#1a163a] border border-[var(--color-glass-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-gray-600"
                                        placeholder="votre@email.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1">Email invalide</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Sujet</label>
                                    <input
                                        {...register("subject", { required: true })}
                                        className="w-full bg-[#1a163a] border border-[var(--color-glass-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-gray-600"
                                        placeholder="Sujet de votre demande"
                                    />
                                    {errors.subject && <span className="text-red-500 text-xs mt-1">Ce champ est requis</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        className="w-full bg-[#1a163a] border border-[var(--color-glass-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-gray-600 h-32 resize-none"
                                        placeholder="Détaillez votre demande ici..."
                                    />
                                    {errors.message && <span className="text-red-500 text-xs mt-1">Ce champ est requis</span>}
                                </div>

                                <Button className="w-full mt-4" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                                </Button>
                            </form>
                        )}
                    </AnimatePresence>
                </Card>
            </div>
        </div>
    );
}
