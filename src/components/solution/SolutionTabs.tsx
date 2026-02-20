'use client';

import { useLanguage } from '@/context/LanguageContext';

export type SolutionTab = 'sas' | 'medallia' | 'scalium';

interface SolutionTabsProps {
    activeTab: SolutionTab;
    onTabChange: (tab: SolutionTab) => void;
}

export default function SolutionTabs({ activeTab, onTabChange }: SolutionTabsProps) {
    const { t } = useLanguage();

    const tabs = [
        { id: 'sas' as SolutionTab, label: t.solution.tabs.sas },
        { id: 'medallia' as SolutionTab, label: t.solution.tabs.medallia },
        { id: 'scalium' as SolutionTab, label: t.solution.tabs.scalium },
    ];

    return (
        <div className="bg-[#F5F6F7] sticky top-[64px] lg:top-[80px] z-40 h-[60px] md:h-[90px] flex items-center shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 md:px-0 w-full">
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
