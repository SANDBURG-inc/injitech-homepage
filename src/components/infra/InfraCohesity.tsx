"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "../common/ScrollReveal";
import MobileTabDropdown from "../common/MobileTabDropdown";
import InquiryModal from "../common/InquiryModal";

export default function InfraCohesity() {
    const { t } = useLanguage();
    const [activeSolution, setActiveSolution] = useState<keyof typeof t.infra.cohesity.major_solution.tabs>("dataprotect");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ensure data exists before accessing
    const solutionData = t.infra.cohesity.major_solution.items[activeSolution];

    return (
        <div className="flex flex-col w-full">
            {/* Section 1: Logo & Intro */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col items-center py-20 md:pb-[160px] md:pt-[200px] w-full max-w-[960px]">
                    <div className="flex flex-col gap-10 md:gap-[56px] items-center text-center w-full">
                        {/* Logo */}
                        <ScrollReveal delay={100} className="w-full flex justify-center">
                            <div className="relative w-[200px] h-[60px] md:w-[392px] md:h-[112px]">
                                <Image
                                    src="/assets/infra/cohesity/cohesity_logo.png"
                                    alt="Cohesity Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </ScrollReveal>
                        {/* Intro Text */}
                        <ScrollReveal>
                            <div className="flex flex-col gap-6 w-full">
                                <p className="text-[#121213] text-xl md:text-[32px] font-semibold leading-relaxed md:leading-[48px] tracking-tight md:tracking-[-0.32px] whitespace-normal md:whitespace-pre-line break-keep">
                                    {t.infra.cohesity.intro}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 2: Major Advantages */}
            <section className="bg-[#f0f9ff] flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                                {t.infra.cohesity.major_advantages.tag}
                            </span>
                            <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.cohesity.major_advantages.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {t.infra.cohesity.major_advantages.items.map((item, index) => (
                            <div key={index} className="bg-white rounded-[12px] flex flex-col items-start gap-6 px-8 py-10 md:px-[40px] md:pt-[56px] md:pb-[96px] w-full">
                                {/* Title */}
                                <h3 className="text-[#121213] text-xl md:text-[28px] font-semibold leading-snug md:leading-[40px] tracking-tight md:tracking-[-0.28px] whitespace-pre-line">
                                    {item.title}
                                </h3>
                                {/* Dot Separator - Using CSS for optimization */}
                                <div className="w-4 h-4 rounded-full bg-[#0ea5e9]" />
                                {/* Description */}
                                <p className="text-[#25272e] text-base md:text-[18px] font-normal leading-relaxed md:leading-[28px] tracking-tight md:tracking-[-0.18px] whitespace-pre-line">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Major Solution */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[48px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal className="relative z-20 w-full">
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                                {t.infra.cohesity.major_solution.tag}
                            </span>

                            {/* Solution Tabs */}
                            <MobileTabDropdown
                                tabs={t.infra.cohesity.major_solution.tabs}
                                activeTab={activeSolution}
                                onTabChange={(tabKey) => setActiveSolution(tabKey as any)}
                            />

                            <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                                <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                    {solutionData.title}
                                </h2>
                                <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                    {solutionData.description}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Video Content */}
                    <div className="w-full relative rounded-md overflow-hidden shadow-lg h-[400px] md:h-[788px]">
                        <video
                            key={activeSolution}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={solutionData.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            {/* Section 4: Use Cases */}
            <section className="bg-[#1d1f23] flex flex-col items-center px-8 md:px-[120px] w-full border-t border-white/10">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                                {t.infra.cohesity.useCases.tag}
                            </span>

                            <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                                <h2 className="text-white text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                    {t.infra.cohesity.useCases.title}
                                </h2>
                                <p className="text-[#dadee0] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                    {t.infra.cohesity.useCases.subtitle}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {t.infra.cohesity.useCases.items.map((item, index) => (
                            <div key={index} className="flex flex-col gap-6 w-full">
                                {/* Image Container */}
                                <div className="bg-white rounded-[12px] flex items-center justify-center h-[256px] w-full overflow-hidden relative p-8">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                {/* Text Content */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-[#fbfcfd] text-xl md:text-[20px] font-semibold leading-tight md:leading-[28px] tracking-tight md:tracking-[-0.2px] whitespace-pre-line">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#dadee0] text-base md:text-[18px] font-medium leading-relaxed md:leading-[28px] tracking-tight md:tracking-[-0.18px] whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="w-full flex justify-center mt-8 md:mt-0">
                        <button className="bg-white border border-[#9aa2b0] rounded-[8px] h-[64px] px-[24px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <span className="text-[#25272e] text-[18px] font-semibold tracking-[-0.18px]">
                                더보기
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 5: Operating Model */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                        <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                            {t.infra.cohesity.partnerCapabilities.tag}
                        </span>

                        <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                            <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.cohesity.partnerCapabilities.title}
                            </h2>
                            <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                {t.infra.cohesity.partnerCapabilities.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {t.infra.cohesity.partnerCapabilities.cards.map((card, index) => (
                            <div key={index} className="bg-[#f0f9ff] rounded-[12px] px-8 py-10 md:px-[40px] md:py-[56px] flex flex-col gap-6 items-start w-full">
                                <h3 className="text-[#121213] text-2xl md:text-[28px] font-semibold leading-tight md:leading-[40px] tracking-tight md:tracking-[-0.28px] whitespace-pre-line">
                                    {card.title}
                                </h3>
                                <div className="text-[#0ea5e9] text-4xl md:text-[48px] font-extrabold leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                    {card.highlight}
                                </div>
                                <div className="flex flex-col gap-0 text-[#25272e] text-base md:text-[18px] font-normal leading-relaxed md:leading-[28px] tracking-tight md:tracking-[-0.18px]">
                                    {card.items.map((item, i) => (
                                        <p key={i} className="whitespace-pre-line">{item}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="w-full flex justify-center mt-8 md:mt-[48px]">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#0ea5e9] rounded-[8px] h-[64px] px-[24px] flex items-center justify-center gap-[8px] hover:bg-[#0284c7] transition-colors"
                        >
                            <span className="text-white text-[18px] font-semibold tracking-[-0.18px] leading-[28px]">
                                {t.infra.cohesity.partnerCapabilities.buttonText}
                            </span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 12H4.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
