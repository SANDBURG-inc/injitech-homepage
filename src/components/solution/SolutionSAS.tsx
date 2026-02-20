"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import InquiryModal from "../common/InquiryModal";
import ScrollReveal from "../common/ScrollReveal";

export default function SolutionSAS() {
    const { t } = useLanguage();
    const [activeSolution, setActiveSolution] = useState<"viya" | "visual_analytics" | "enterprise_miner" | "customer_intelligence" | "fraud_management" | "risk_management">("viya");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const data = t.solution.sas;
    const solutionData = data.solutions.items[activeSolution];

    return (
        <div className="w-full">
            {/* Section 1: Introduction */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col items-center pb-[160px] pt-[200px] w-full max-w-[1400px]">
                    <div className="flex flex-col gap-[56px] items-center justify-center max-w-[960px] w-full">
                        {/* SAS Logo */}
                        <ScrollReveal delay={100} className="w-full flex justify-center">
                            <div className="relative w-full max-w-[300px] h-[112px] md:max-w-[400px] md:h-[112px]">
                                <Image
                                    src="/assets/solution/SAS/SAS_logo.png"
                                    alt="SAS"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </ScrollReveal>

                        {/* Intro Text */}
                        <ScrollReveal>
                            <div className="flex flex-col text-[#121213] text-xl md:text-[32px] font-semibold leading-snug md:leading-[48px] text-center tracking-tight md:tracking-[-0.32px] whitespace-pre-wrap">
                                <p>
                                    {data.intro}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Intro Video */}
                        <div className="w-full relative aspect-video rounded-2xl overflow-hidden bg-[#f5f6f7]">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/assets/solution/SAS/SAS_video.mp4" type="video/mp4" />
                            </video>
                        </div>
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
                                {data.advantages.tag}
                            </span>
                            <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                {data.advantages.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {data.advantages.items.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="bg-white flex flex-col gap-6 items-start pb-16 md:pb-[96px] pt-10 md:pt-[56px] px-8 md:px-[40px] rounded-xl"
                            >
                                <h3 className="text-[#121213] text-xl md:text-[28px] font-semibold leading-tight md:leading-[40px] tracking-tight">
                                    {item.title}
                                </h3>
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
                <div className="flex flex-col gap-10 md:gap-[48px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <ScrollReveal>
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {data.solutions.tag}
                            </span>

                            {/* Solution Tabs */}
                            <div className="flex flex-wrap gap-2 md:gap-[8px] items-start">
                                {(Object.keys(data.solutions.tabs) as Array<keyof typeof data.solutions.tabs>).map((tabKey) => (
                                    <button
                                        key={tabKey}
                                        onClick={() => setActiveSolution(tabKey as any)}
                                        className={`px-5 py-2 md:px-[20px] md:py-[8px] rounded-full text-sm md:text-[16px] font-semibold tracking-tight transition-all border ${activeSolution === tabKey
                                            ? "bg-[#0ea5e9] text-white border-[#0ea5e9]"
                                            : "bg-white text-[#495461] border-[#d0d5dc] hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                                            }`}
                                    >
                                        {data.solutions.tabs[tabKey]}
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
                    <div className="w-full relative rounded-2xl overflow-hidden aspect-video bg-[#f5f6f7]">
                        <video
                            key={activeSolution}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={solutionData.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            {/* Section 4: Use Cases */}
            <section className="bg-[#1d1f23] flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                        <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                            {data.useCases.tag}
                        </span>
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                            <h2 className="text-white text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {data.useCases.title}
                            </h2>
                            <p className="text-[#dadee0] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                {data.useCases.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 w-full">
                        {data.useCases.items.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col gap-6 w-full">
                                <div className="bg-white rounded-[12px] flex items-center justify-center h-[256px] w-full px-10 overflow-hidden relative">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="self-start border border-[#0ea5e9] rounded-[4px] px-3 py-1 flex items-center justify-center">
                                        <span className="text-[#0ea5e9] text-[14px] font-medium leading-[20px]">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#fbfcfd] text-[20px] font-semibold tracking-tight leading-[28px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#dadee0] text-[18px] font-medium leading-[28px] tracking-tight whitespace-pre-line">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Awards & Recognition */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full font-medium">
                        <span className="text-[#0ea5e9] text-lg md:text-[20px] tracking-tight">
                            {data.awards.tag}
                        </span>
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                            <h2 className="text-[#121213] text-3xl md:text-[48px] leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {data.awards.title}
                            </h2>
                            <p className="text-[#495461] text-lg md:text-[24px] leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                {data.awards.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center relative w-full border-t border-[#d0d5dc]">
                        {data.awards.items.map((item: any, index: number) => (
                            <div key={index} className="bg-white border-[#d0d5dc] border-b content-stretch flex flex-col md:flex-row items-center overflow-clip py-6 md:py-[40px] relative w-full gap-4 md:gap-0">
                                <div className="flex flex-col items-start justify-center relative shrink-0 w-full md:w-[160px]">
                                    <span className="text-[#25272e] text-[20px] md:text-[24px] font-semibold md:tracking-[-0.24px] leading-relaxed">
                                        {item.year}
                                    </span>
                                </div>
                                <div className="flex flex-col md:flex-row flex-1 items-start md:items-center justify-between min-h-px min-w-px relative text-[#25272e] text-[20px] md:text-[24px] w-full gap-2 md:gap-0">
                                    <p className="leading-relaxed font-normal md:tracking-[-0.24px]">
                                        {item.title}
                                    </p>
                                    <p className="leading-relaxed font-normal text-[#495461] md:text-[#25272e] text-[16px] md:text-[24px] md:tracking-[-0.24px]">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
