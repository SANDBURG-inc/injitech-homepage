"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfraHero from "@/components/infra/InfraHero";
import InfraTabs, { InfraTab } from "@/components/infra/InfraTabs";
import InfraDell from "@/components/infra/InfraDell";
import InfraHPE from "@/components/infra/InfraHPE";
import InfraVMware from "@/components/infra/InfraVMware";
import InfraCohesity from "@/components/infra/InfraCohesity";
import { useLanguage } from "@/context/LanguageContext";

export default function InfrastructurePage() {
    const { t } = useLanguage();
    const params = useParams();
    const slug = params.slug as string[] | undefined;

    const activeTab = useMemo(() => {
        if (!slug || slug.length === 0) return 'dell';
        const tab = slug[0] as InfraTab;
        if (['dell', 'hpe', 'vmware', 'cohesity'].includes(tab)) return tab;
        return 'dell';
    }, [slug]);

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
            />
            <div className="animate-in fade-in duration-500" key={activeTab}>
                {renderContent()}
            </div>
            <Footer />
        </main>
    );
}
