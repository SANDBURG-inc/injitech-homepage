'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import CompanyAwards from './CompanyAwards';
import ScrollReveal from '../common/ScrollReveal';

export default function CompanyHistory() {
    const { t } = useLanguage();
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Split timeline into current (2020-Present) and old (2011-2019)
    const currentHistory = t.company.history.timeline.filter((item: any) => parseInt(item.year) >= 2020);
    const oldHistory = t.company.history.timeline.filter((item: any) => parseInt(item.year) < 2020);

    const HistorySection = ({ banner, timeline, isFirst }: { banner: any, timeline: any[], isFirst?: boolean }) => (
        <div className="w-full max-w-[1400px] px-8 lg:px-0 pb-[80px] md:pb-[72px]">
            <ScrollReveal>
                <div className="relative w-full h-[240px] md:h-[480px] rounded-[12px] overflow-hidden">
                    <Image
                        src={isFirst ? "/assets/awards/bg_history.png" : "/assets/awards/bg2_history.png"}
                        alt="Company History Banner"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <p className="text-[20px] md:text-[32px] font-medium leading-[28px] md:leading-[48px] tracking-[-0.32px] mb-[4px] md:mb-[8px]">
                            {banner.title}
                        </p>
                        <h3 className="text-[32px] md:text-[72px] font-semibold leading-[40px] md:leading-[96px] tracking-[-0.72px]">
                            {banner.period}
                        </h3>
                    </div>
                </div>
            </ScrollReveal>

            {/* Timeline Items */}
            <div className="mt-[80px] md:mt-[160px] flex flex-col gap-[48px] md:gap-[72px]">
                {timeline.map((item: any) => (
                    <ScrollReveal key={item.year}>
                        <div className="flex flex-col md:flex-row gap-[24px]">
                            {/* Year */}
                            <div className="w-full md:w-[451px] shrink-0">
                                <span className="text-[#121213] text-[32px] md:text-[72px] font-semibold leading-none tracking-[-0.72px]">
                                    {item.year}
                                </span>
                            </div>

                            {/* Events */}
                            <div className="flex flex-col gap-[16px] md:gap-[24px] flex-1 md:pt-[12px]">
                                {item.events.map((event: any, idx: number) => (
                                    <div key={idx} className="flex flex-col md:flex-row gap-[8px] md:gap-0 group">
                                        <div className="w-full md:w-[160px] shrink-0">
                                            <span className="text-[#25272E] text-[18px] md:text-[24px] font-semibold leading-[28px] md:leading-[36px] tracking-[-0.24px]">
                                                {event.month}
                                            </span>
                                        </div>
                                        <p className="text-[#25272E] text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[36px] tracking-[-0.24px] flex-1">
                                            {event.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );

    return (
        <div className="bg-white flex flex-col items-center">
            {/* Header Section */}
            <div className="w-full max-w-[1400px] px-8 lg:px-0 pt-[80px] md:pt-[200px] pb-[60px] md:pb-[72px]">
                <ScrollReveal>
                    <div className="flex flex-col items-start">
                        <span className="text-[#0EA5E9] text-[16px] md:text-[20px] font-medium leading-[28px] tracking-[-0.2px] uppercase mb-[12px] md:mb-[32px]">
                            {t.company.history.tag}
                        </span>
                        <div className="flex flex-col gap-[12px] md:gap-[24px]">
                            <h2 className="text-[#121213] text-[24px] md:text-[48px] font-bold md:font-medium leading-[34px] md:leading-[64px] tracking-[-0.48px] whitespace-pre-line">
                                {t.company.history.title}
                            </h2>
                            <p className="text-[#495461] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] tracking-[-0.24px] whitespace-pre-line font-medium">
                                {t.company.history.subtitle}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Current History (2020-Present) */}
            <HistorySection
                banner={{
                    title: t.company.history.banner.title,
                    period: t.company.history.banner.period
                }}
                timeline={currentHistory}
                isFirst
            />

            {/* Expand/Collapse Button */}
            <div className="w-full max-w-[1400px] px-8 lg:px-0 mb-[80px] md:mb-[160px]">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full h-[64px] bg-white border border-[#9AA2B0] rounded-[8px] flex items-center justify-center gap-[8px] text-[#25272E] text-[18px] font-semibold hover:bg-[#F9FAFB] transition-colors"
                >
                    <span>
                        {isExpanded ? t.common?.fold || '접기' : t.common?.unfold || '펼치기'}
                    </span>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Old History (Foundation-2019) */}
            {isExpanded && (
                <HistorySection
                    banner={{
                        title: t.company.history.banner.title2,
                        period: t.company.history.banner.period2
                    }}
                    timeline={oldHistory}
                />
            )}

            {/* Awards Section */}
            <CompanyAwards />
        </div>
    );
}
