"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionTabs, { SolutionTab } from "@/components/solution/SolutionTabs";
import SolutionSAS from "@/components/solution/SolutionSAS";
import SolutionMedallia from "@/components/solution/SolutionMedallia";
import SolutionSCALIUM from "@/components/solution/SolutionSCALIUM";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionPage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<SolutionTab>('sas');

    const renderContent = () => {
        switch (activeTab) {
            case 'sas':
                return <SolutionSAS />;
            case 'medallia':
                return <SolutionMedallia />;
            case 'scalium':
                return <SolutionSCALIUM />;
            default:
                return <SolutionSAS />;
        }
    };

    const heroBackgrounds: Record<SolutionTab, string> = {
        sas: "/assets/solution/SAS/hero_bg.png",
        medallia: "/assets/solution/Medallia/hero_bg.png",
        scalium: "/assets/solution/SCALIUM/hero_bg.png",
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
                onTabChange={setActiveTab}
            />
            <div className="animate-in fade-in duration-500">
                {renderContent()}
            </div>
            <Footer />
        </main>
    );
}
