"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import InquiryModal from "../common/InquiryModal";
import ScrollReveal from "../common/ScrollReveal";
import MobileTabDropdown from "../common/MobileTabDropdown";

export default function SolutionMedallia() {
    const { t } = useLanguage();
    const [activeSolution, setActiveSolution] = useState<"experience_cloud" | "athena" | "clf" | "dxa">("experience_cloud");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const data = t.solution.medallia;
    const solutionData = (data.solutions.items as any)[activeSolution];

    return (
        <div className="w-full">
            {/* Section 1: Introduction */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col items-center pb-20 md:pb-[160px] pt-24 md:pt-[200px] w-full max-w-[1400px]">
                    <div className="flex flex-col gap-10 md:gap-[56px] items-center justify-center max-w-[960px] w-full">
                        {/* Medallia Logo */}
                        <ScrollReveal delay={100} className="w-full flex justify-center">
                            <div className="relative w-full max-w-[320px] h-[60px] md:max-w-[408px] md:h-[112px]">
                                <Image
                                    src="/assets/solution/Medallia/Medallia_logo.png"
                                    alt="Medallia"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </ScrollReveal>

                        {/* Intro Text */}
                        <ScrollReveal>
                            <div className="flex flex-col text-[#121213] text-xl md:text-[32px] font-semibold leading-snug md:leading-[48px] text-center tracking-tight md:tracking-[-0.32px] whitespace-normal md:whitespace-pre-wrap break-keep">
                                <p>
                                    {data.intro}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Intro Video */}
                        <div className="w-full relative rounded-2xl overflow-hidden aspect-video bg-[#f5f6f7]">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/assets/solution/Medallia/medallia_video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Major Advantages */}
            <section className="bg-[#f0f9ff] flex flex-col items-center px-8 md:px-[120px] w-full">
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
                                className="bg-white flex flex-col gap-6 items-start pb-16 md:pb-[96px] pt-10 md:pt-[56px] px-8 md:px-[40px] rounded-[12px]"
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
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[48px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <ScrollReveal className="relative z-20 w-full">
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {data.solutions.tag}
                            </span>

                            {/* Solution Tabs */}
                            <MobileTabDropdown
                                tabs={data.solutions.tabs}
                                activeTab={activeSolution}
                                onTabChange={(tabKey) => setActiveSolution(tabKey as any)}
                            />

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

                    {/* Platform Image Content */}
                    <div className="w-full relative rounded-md overflow-hidden bg-white border border-[#d0d5dc]/50">
                        <Image
                            src={solutionData.image}
                            alt={solutionData.title}
                            width={1400}
                            height={788}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Section 4: Use Cases */}
            <section className="bg-[#1d1f23] flex flex-col items-center px-8 md:px-[120px] w-full border-t border-white/5">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {data.useCases.tag}
                            </span>
                            <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                                <h2 className="text-white text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-normal md:whitespace-pre-line break-keep">
                                    {data.useCases.title}
                                </h2>
                                <p className="text-[#dadee0] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-normal md:whitespace-pre-line break-keep ">
                                    {data.useCases.description}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {data.useCases.items.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col gap-6 w-full">
                                <div className="bg-white rounded-[12px] flex items-center justify-center p-8 aspect-[332/256] w-full relative overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.client}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-start">
                                    <div className="border border-[#0ea5e9] px-3 py-2 rounded-[4px] flex items-center justify-center">
                                        <span className="text-[#0ea5e9] text-sm font-medium leading-tight">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-[#fbfcfd] text-xl md:text-[20px] font-semibold tracking-tight">
                                        {item.client}
                                    </h3>
                                    <p className="text-[#dadee0] text-lg md:text-[18px] font-medium leading-relaxed tracking-tight whitespace-normal md:whitespace-pre-line break-keep">
                                        {item.project}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Partner Capabilities */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                        <span className="text-[#0ea5e9] text-base md:text-[20px] font-medium tracking-tight">
                            {data.partnerCapabilities.tag}
                        </span>
                        <div className="flex flex-col gap-4 md:gap-[12px] items-start w-full">
                            <h2 className="text-[#121213] text-2xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {data.partnerCapabilities.title}
                            </h2>
                            <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                {data.partnerCapabilities.description}
                            </p>
                        </div>
                    </div>

                    {/* Milestone List */}
                    <div className="w-full flex flex-col border-t border-b border-[#d0d5dc]">
                        {data.partnerCapabilities.items.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-start md:items-center py-6 md:py-[40px] gap-4 md:gap-0"
                            >
                                <div className="w-full md:w-[160px] text-[#25272e] text-xl md:text-[24px] font-semibold tracking-tight">
                                    {item.year}
                                </div>
                                <div className="flex flex-col md:flex-row flex-1 justify-between gap-2 md:gap-0">
                                    <span className="text-[#25272e] text-xl md:text-[24px] font-normal tracking-tight">
                                        {item.title}
                                    </span>
                                    <span className="text-[#25272e] text-lg md:text-[24px] font-normal tracking-tight">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
