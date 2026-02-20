"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import InfraHero from "@/components/infra/InfraHero";
import InfraTabs, { InfraTab } from "@/components/infra/InfraTabs";
import InfraDell from "@/components/infra/InfraDell";
import InfraHPE from "@/components/infra/InfraHPE";
import InfraVMware from "@/components/infra/InfraVMware";
import InfraCohesity from "@/components/infra/InfraCohesity";
import { useLanguage } from "@/context/LanguageContext";

export default function InfrastructurePage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<InfraTab>('dell');

    const renderContent = () => {
        switch (activeTab) {
            case 'dell':
                return <InfraDell />;
            case 'hpe':
                return <InfraHPE />;
            case 'vmware':
                return <InfraVMware />;
            case 'cohesity':
                return <InfraCohesity />;
            default:
                return <InfraDell />;
        }
    };

    // Using different backgrounds for each tab to provide visual variety, 
    // similar to how the Company page handles tabs.
    const heroBackgrounds: Record<InfraTab, string> = {
        dell: "/assets/infra/dell/hero_bg.png",
        hpe: "/assets/infra/hpe/hero_bg.png",
        vmware: "/assets/infra/vmware/hero_bg.png",
        cohesity: "/assets/infra/cohesity/hero_bg.png",
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <InfraHero
                title={t.infra.tabs[activeTab]}
                backgroundImage={heroBackgrounds[activeTab]}
            />
            <InfraTabs
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
