"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyTabs, { CompanyTab } from "@/components/company/CompanyTabs";
import CompanyOverview from "@/components/company/CompanyOverview";
import CompanyBusiness from "@/components/company/CompanyBusiness";
import CompanyHistory from "@/components/company/CompanyHistory";
import CompanyLocation from "@/components/company/CompanyLocation";
import { useLanguage } from "@/context/LanguageContext";

export default function CompanyPage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<CompanyTab>('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <CompanyOverview />;
            case 'business':
                return <CompanyBusiness />;
            case 'history':
                return <CompanyHistory />;
            case 'location':
                return <CompanyLocation />;
            default:
                return <CompanyOverview />;
        }
    };

    const heroBackgrounds: Record<CompanyTab, string> = {
        overview: "/assets/company/hero_bg_new.png",
        business: "/assets/business-area/hero_bg.png",
        history: "/assets/awards/hero_bg.png",
        location: "/assets/location/hero_bg.png",
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <CompanyHero
                title={t.company.tabs[activeTab]}
                backgroundImage={heroBackgrounds[activeTab]}
            />
            <CompanyTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            {renderContent()}
            <Footer />
        </main>
    );
}
