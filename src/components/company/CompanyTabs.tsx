"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export type CompanyTab = 'overview' | 'business' | 'history' | 'location';

interface CompanyTabsProps {
    activeTab: CompanyTab;
    onTabChange: (tab: CompanyTab) => void;
}

export default function CompanyTabs({ activeTab, onTabChange }: CompanyTabsProps) {
    const { t } = useLanguage();

    const tabs = [
        { id: 'overview' as CompanyTab, label: t.company.tabs.overview },
        { id: 'business' as CompanyTab, label: t.company.tabs.business },
        { id: 'history' as CompanyTab, label: t.company.tabs.history },
        { id: 'location' as CompanyTab, label: t.company.tabs.location },
    ];

    return (
        <div className="bg-[#F5F6F7] sticky top-[64px] lg:top-[80px] z-40 h-[60px] md:h-[90px] flex items-center shadow-sm">
            <div className="max-w-[1440px] mx-auto px-4 md:px-0 w-full">
                <div className="flex items-center justify-center gap-[24px] md:gap-[48px] overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                onTabChange(tab.id);
                                window.scrollTo({ top: 0, behavior: 'instant' });
                            }}
                            className={`
                                py-2 whitespace-nowrap text-[15px] md:text-[18px] font-medium tracking-[-0.01em] transition-all
                                ${activeTab === tab.id
                                    ? 'text-[#25272E] opacity-80 border-b-2 border-[#25272E]'
                                    : 'text-[#A6A6A6] opacity-100 hover:text-[#25272E]'}
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
