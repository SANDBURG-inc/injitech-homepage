"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "../common/ScrollReveal";

export default function InfraVMware() {
    const { t } = useLanguage();
    const [activeSolution, setActiveSolution] = useState<keyof typeof t.infra.vmware.major_solution.tabs>("vcf");

    // Ensure data exists before accessing
    const solutionData = t.infra.vmware.major_solution.items[activeSolution];

    return (
        <div className="flex flex-col w-full">
            {/* Section 1: Logo & Intro */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col items-center py-20 md:pb-[160px] md:pt-[200px] w-full max-w-[960px]">
                    <div className="flex flex-col gap-10 md:gap-[56px] items-center text-center w-full">
                        {/* Logo */}
                        <ScrollReveal delay={100} className="w-full flex justify-center">
                            <div className="relative w-[200px] h-[60px] md:w-[444px] md:h-[72px]">
                                <Image
                                    src="/assets/infra/vmware/vmware_logo.png"
                                    alt="VMware Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </ScrollReveal>
                        {/* Intro Text */}
                        <ScrollReveal>
                            <div className="flex flex-col gap-6 w-full">
                                <p className="text-[#121213] text-xl md:text-[32px] font-semibold leading-relaxed md:leading-[48px] tracking-tight md:tracking-[-0.32px] whitespace-pre-line">
                                    {t.infra.vmware.intro}
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
                            <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                                {t.infra.vmware.major_advantages.tag}
                            </span>
                            <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.vmware.major_advantages.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {t.infra.vmware.major_advantages.items.map((item, index) => (
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
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[48px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                                {t.infra.vmware.major_solution.tag}
                            </span>

                            {/* Solution Tabs */}
                            <div className="flex flex-wrap gap-2 md:gap-[8px] items-start">
                                {(Object.keys(t.infra.vmware.major_solution.tabs) as Array<keyof typeof t.infra.vmware.major_solution.tabs>).map((tabKey) => (
                                    <button
                                        key={tabKey}
                                        onClick={() => setActiveSolution(tabKey)}
                                        className={`px-5 py-2 md:px-[20px] md:py-[8px] rounded-full text-sm md:text-[16px] font-semibold tracking-tight transition-all border ${activeSolution === tabKey
                                            ? "bg-[#0ea5e9] text-white border-[#0ea5e9]"
                                            : "bg-white text-[#495461] border-[#d0d5dc] hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                                            }`}
                                    >
                                        {t.infra.vmware.major_solution.tabs[tabKey]}
                                    </button>
                                ))}
                            </div>

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
            <section className="bg-[#1d1f23] flex flex-col items-center px-6 md:px-[120px] w-full border-t border-white/10">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                                {t.infra.vmware.useCases.tag}
                            </span>

                            <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                                <h2 className="text-white text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                    {t.infra.vmware.useCases.title}
                                </h2>
                                <p className="text-[#dadee0] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                    {t.infra.vmware.useCases.subTitle}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {t.infra.vmware.useCases.items.map((item, index) => (
                            <div key={index} className="flex flex-col gap-6 w-full">
                                {/* Image Container */}
                                <div className="bg-white rounded-[12px] flex items-center justify-center h-[256px] w-full overflow-hidden relative">
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
                </div>
            </section>

            {/* Section 5: Partner Capabilities */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-8 md:gap-[32px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <span className="text-[#0ea5e9] text-xl md:text-[20px] font-medium leading-normal md:leading-[28px] tracking-tight md:tracking-[-0.2px]">
                        {t.infra.vmware.partnerCapabilities.tag}
                    </span>

                    <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                        <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                            {t.infra.vmware.partnerCapabilities.title}
                        </h2>
                        <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                            {t.infra.vmware.partnerCapabilities.description}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
