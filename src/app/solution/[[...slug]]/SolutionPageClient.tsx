"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionTabs, { SolutionTab } from "@/components/solution/SolutionTabs";
import SolutionSAS from "@/components/solution/SolutionSAS";
import SolutionMedallia from "@/components/solution/SolutionMedallia";
import SolutionSCAILIUM from "@/components/solution/SolutionSCAILIUM";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionPage() {
    const { t } = useLanguage();
    const params = useParams();
    const slug = params.slug as string[] | undefined;

    const activeTab = useMemo(() => {
        if (!slug || slug.length === 0) return 'sas';
        const tab = slug[0] as SolutionTab;
        if (['sas', 'medallia', 'scailium'].includes(tab)) return tab;
        return 'sas';
    }, [slug]);

    const renderContent = () => {
        switch (activeTab) {
            case 'sas':
                return <SolutionSAS />;
            case 'medallia':
                return <SolutionMedallia />;
            case 'scailium':
                return <SolutionSCAILIUM />;
            default:
                return <SolutionSAS />;
        }
    };

    const heroBackgrounds: Record<SolutionTab, string> = {
        sas: "/assets/solution/SAS/hero_bg.png",
        medallia: "/assets/solution/Medallia/hero_bg.png",
        scailium: "/assets/solution/SCAILIUM/hero_bg.png",
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <SolutionHero
                title={t.solution.tabs[activeTab]}
                backgroundImage={heroBackgrounds[activeTab]}
            />
            <SolutionTabs
                activeTab={activeTab}
            />
            <div className="animate-in fade-in duration-500" key={activeTab}>
                {renderContent()}
            </div>
            <Footer />
        </main>
    );
}
