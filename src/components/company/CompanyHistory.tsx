'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import CompanyAwards from './CompanyAwards';
import ScrollReveal from '../common/ScrollReveal';

export default function CompanyHistory() {
    const { t } = useLanguage();

    return (
        <div className="bg-white flex flex-col items-center">
            {/* Header Section */}
            <div className="w-full max-w-[1400px] px-5 lg:px-0 pt-[80px] md:pt-[200px] pb-[60px] md:pb-[72px]">
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

            {/* Banner Section */}
            <div className="w-full max-w-[1400px] px-5 lg:px-0 pb-[80px] md:pb-[72px]">
                <ScrollReveal>
                    <div className="relative w-full h-[240px] md:h-[480px] rounded-[12px] overflow-hidden">
                        <Image
                            src="/assets/awards/bg_history.png"
                            alt="Company History Banner"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/25" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                            <p className="text-[20px] md:text-[32px] font-medium leading-[28px] md:leading-[48px] tracking-[-0.32px] mb-[4px] md:mb-[8px]">
                                {t.company.history.banner.title}
                            </p>
                            <h3 className="text-[32px] md:text-[72px] font-semibold leading-[40px] md:leading-[96px] tracking-[-0.72px]">
                                {t.company.history.banner.period}
                            </h3>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Timeline Section */}
                <div className="mt-[80px] md:mt-[160px] flex flex-col gap-[48px] md:gap-[72px]">
                    {t.company.history.timeline.map((item: any) => (
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

            {/* Awards Section */}
            <CompanyAwards />
        </div>
    );
}
