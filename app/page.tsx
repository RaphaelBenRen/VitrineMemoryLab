"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Rocket, Brain, FileText, Zap, MessageSquare, Upload } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 flex flex-col justify-center min-h-[85vh]">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-[var(--color-brand-primary)] opacity-20 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-[var(--color-brand-secondary)] opacity-30 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text Content (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[var(--color-glass-border)] backdrop-blur-md text-sm text-[var(--color-brand-accent)] mb-8 shadow-lg shadow-purple-500/10">
                <Image src="/images/memoryLab-Neon-Lab-1024x1024.png" alt="Logo" width={20} height={20} className="rounded-full" />
                <span>Disponible sur l'App Store</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-[var(--color-brand-text-primary)]">
                Révisez plus intelligemment avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] to-[#ff5e62]">MemoryLab Pro</span>.
              </h1>
              <p className="text-xl text-[var(--color-brand-text-secondary)] mb-10 max-w-xl leading-relaxed">
                L'application ultime pour les étudiants ingénieurs. Importez vos cours, générez des QCM par IA et maîtrisez vos examens.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" icon={<Rocket />} onClick={() => window.open('https://apps.apple.com', '_blank')}>
                  Télécharger sur l'App Store
                </Button>
                <Button size="lg" variant="secondary" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                  Découvrir
                </Button>
              </div>
            </motion.div>

            {/* Phone Mockup (Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto w-full max-w-[260px] md:max-w-[340px] lg:mr-0"
            >
              <div className="relative rounded-[3rem] border-8 border-[#302b63] overflow-hidden shadow-2xl shadow-purple-500/20 bg-black rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/screenapp.jpg"
                  alt="Interface MemoryLab Pro"
                  width={500}
                  height={1000}
                  className="w-full h-auto object-cover"
                />

                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-black/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Fonctionnalités Clés</h2>
            <p className="text-[var(--color-brand-text-secondary)] max-w-2xl mx-auto text-lg">
              Importation, Génération, Révision. Tout ce dont vous avez besoin.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <Card className="hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-primary)]/20 flex items-center justify-center text-[var(--color-brand-accent)] mb-6 group-hover:scale-110 transition-transform">
                <Upload size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Import Universel</h3>
              <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed">
                Importez vos cours depuis des PDF ou utilisez le scanner intégré pour vos notes papier. MemoryLab centralise tout.
              </p>
            </Card>

            <Card className="hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">QCM & Progression</h3>
              <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed">
                Générez des QCM intelligents à partir de vos cours. Suivez votre historique de progression et identifiez vos lacunes.
              </p>
            </Card>

            <Card className="hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Flashcards IA</h3>
              <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed">
                Transformez instantanément vos définitions et concepts clés en paquets de Flashcards prêts à l'emploi.
              </p>
            </Card>

            <Card className="hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-success)]/20 flex items-center justify-center text-[var(--color-brand-success)] mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Chat avec l'IA</h3>
              <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed">
                Posez des questions directement sur votre cours. L'IA vous répond en citant les passages pertinents de vos documents.
              </p>
            </Card>

            <Card className="hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Résumés Automatiques</h3>
              <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed">
                Obtenez des résumés concis de vos cours longs pour une révision rapide avant l'examen.
              </p>
            </Card>

            <Card className="hover:bg-white/5 transition-colors group flex items-center justify-center border-dashed border-[var(--color-brand-accent)]/30">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-500/20 flex items-center justify-center text-gray-400 mb-6 mx-auto">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Et bien plus...</h3>
                <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed">
                  Découvrez toutes les fonctionnalités en téléchargeant l'app.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
