"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import InquiryModal from "../common/InquiryModal";
import ScrollReveal from "../common/ScrollReveal";

export default function InfraDell() {
    const { t } = useLanguage();
    const [activeSolution, setActiveSolution] = useState<"poweredge" | "san" | "nas">("poweredge");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const solutionData = t.infra.dell.solutions.items[activeSolution];

    return (
        <div className="w-full">
            {/* Section 1: Introduction */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col items-center pb-20 md:pb-[160px] pt-24 md:pt-[200px] w-full max-w-[1400px]">
                    <div className="flex flex-col gap-10 md:gap-[56px] items-center justify-center max-w-[960px] w-full">
                        {/* Dell Logo */}
                        <ScrollReveal delay={100} className="w-full flex justify-center">
                            <div className="relative w-full max-w-[300px] h-[60px] md:max-w-[750px] md:h-[112px]">
                                <Image
                                    src="/assets/infra/dell/46903b8b72f8f7ef9bb991b652e0cbb0296c0b33.png"
                                    alt="Dell Technologies"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </ScrollReveal>

                        {/* Intro Text */}
                        <ScrollReveal>
                            <div className="flex flex-col text-[#121213] text-xl md:text-[32px] font-semibold leading-snug md:leading-[48px] text-center tracking-tight md:tracking-[-0.32px] whitespace-pre-wrap">
                                <p className="mb-4 md:mb-0">
                                    {t.infra.dell.intro}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 2: Major Advantages */}
            <section className="bg-[#f0f9ff] flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {t.infra.dell.advantages.tag}
                            </span>
                            <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                {t.infra.dell.advantages.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {t.infra.dell.advantages.items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white flex flex-col gap-6 items-start pb-16 md:pb-[96px] pt-10 md:pt-[56px] px-8 md:px-[40px] rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-[#121213] text-xl md:text-[28px] font-semibold leading-tight md:leading-[40px] tracking-tight">
                                    {item.title}
                                </h3>
                                {/* Blue Dot */}
                                <div className="w-4 h-4 rounded-full bg-[#0ea5e9]" />
                                <p className="text-[#25272e] text-base md:text-[18px] font-normal leading-relaxed md:leading-[28px] tracking-tight whitespace-pre-line">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Major Solution */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <ScrollReveal>
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            {/* Tag */}
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {t.infra.dell.solutions.tag}
                            </span>

                            {/* Solution Tabs */}
                            <div className="flex flex-wrap gap-2 md:gap-[8px] items-start">
                                {(Object.keys(t.infra.dell.solutions.tabs) as Array<keyof typeof t.infra.dell.solutions.tabs>).map((tabKey) => (
                                    <button
                                        key={tabKey}
                                        onClick={() => setActiveSolution(tabKey)}
                                        className={`px-5 py-2 md:px-[20px] md:py-[8px] rounded-full text-sm md:text-[16px] font-semibold tracking-tight transition-all border ${activeSolution === tabKey
                                            ? "bg-[#0ea5e9] text-white border-[#0ea5e9]"
                                            : "bg-white text-[#495461] border-[#d0d5dc] hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                                            }`}
                                    >
                                        {t.infra.dell.solutions.tabs[tabKey]}
                                    </button>
                                ))}
                            </div>

                            {/* Title & Description */}
                            <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                                <h2 className="text-[#121213] text-2xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                    {solutionData.title}
                                </h2>
                                <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                    {solutionData.description}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Video Content */}
                    <div className="w-full relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                        <video
                            key={activeSolution} // Key change triggers re-render/re-load for new source
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
            <section className="bg-[#121213] flex flex-col items-center px-6 md:px-[120px] w-full border-t border-white/10">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {t.infra.dell.useCases.tag}
                            </span>
                            <h2 className="text-white text-2xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.dell.useCases.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {t.infra.dell.useCases.items.map((item, index) => (
                            <div key={index} className="flex flex-col gap-6 w-full">
                                {/* Logo Container */}
                                <div className="bg-white rounded-[20px] flex items-center justify-center aspect-[323/240] w-full px-6 overflow-hidden">
                                    <div className="relative w-full h-full max-h-[200px]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                {/* Text Content */}
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-white text-lg md:text-[20px] font-bold tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#98a2b3] text-sm md:text-[16px] font-medium leading-relaxed tracking-tight whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Partner Capabilities */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <div className="flex flex-col gap-4 md:gap-[32px] items-start text-left w-full">
                        <span className="text-[#0ea5e9] text-base md:text-[20px] font-medium tracking-tight">
                            {t.infra.dell.partnerCapabilities.tag}
                        </span>
                        <div className="flex flex-col gap-4 md:gap-[12px] items-start">
                            <h2 className="text-[#121213] text-2xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.dell.partnerCapabilities.title}
                            </h2>
                            <p className="text-[#495461] text-sm md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                {t.infra.dell.partnerCapabilities.description}
                            </p>
                        </div>
                    </div>

                    {/* Capability Cards List Block */}
                    <div className="flex flex-col gap-10 md:gap-[48px] items-center w-full">
                        {/* Capability Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {t.infra.dell.partnerCapabilities.items.map((item, index) => (
                                <div key={index} className="bg-[#f0f9ff] rounded-[12px] pb-12 pt-10 px-8 md:pb-[96px] md:pt-[56px] md:px-[40px] flex flex-col items-start gap-4 md:gap-[24px] w-full overflow-hidden">
                                    <h3 className="text-[#121213] text-lg md:text-[28px] font-semibold leading-tight md:leading-[40px] tracking-tight md:tracking-[-0.28px]">
                                        {item.title}
                                    </h3>
                                    <span className="text-[#0ea5e9] text-3xl md:text-[48px] font-extrabold leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                        {item.value}
                                    </span>
                                    <p className="text-[#25272e] text-sm md:text-[18px] font-normal leading-relaxed md:leading-[28px] tracking-tight md:tracking-[-0.18px] whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center w-full">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-4 md:px-[24px] h-12 md:h-[64px] rounded-[8px] transition-all group font-semibold text-base md:text-[18px]"
                            >
                                <div className="flex items-center justify-center px-1">
                                    {t.infra.dell.partnerCapabilities.button}
                                </div>
                                <img src="/assets/move-right.svg" alt="" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
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
