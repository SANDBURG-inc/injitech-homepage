"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import InquiryModal from "../common/InquiryModal";
import ScrollReveal from "../common/ScrollReveal";

export default function SolutionSCALIUM() {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const data = t.solution.scalium;

    return (
        <div className="w-full">
            {/* Section 1: Introduction */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col items-center pb-20 md:pb-[160px] pt-24 md:pt-[200px] w-full max-w-[1400px]">
                    <div className="flex flex-col gap-10 md:gap-[72px] items-center justify-center max-w-[960px] w-full">
                        {/* SCALIUM Logo */}
                        <ScrollReveal delay={100} className="w-full flex justify-center">
                            <div className="relative w-full max-w-[960px] h-[80px] md:h-[165px]">
                                <Image
                                    src="/assets/solution/SCALIUM/Scalium_logo.png"
                                    alt="SCALIUM"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </ScrollReveal>

                        <div className="content-stretch flex flex-col gap-[56px] items-center justify-center w-full">
                            {/* Intro Text */}
                            <ScrollReveal>
                                <div className="flex flex-col text-[#121213] text-xl md:text-[32px] font-semibold leading-snug md:leading-[48px] text-center tracking-tight md:tracking-[-0.32px] md:whitespace-pre-wrap whitespace-normal">
                                    <p>
                                        {data.intro}
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Intro Video */}
                            <div className="aspect-video bg-[#f5f6f7] overflow-clip relative shrink-0 w-full rounded-[12px]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                >
                                    <source src="/assets/solution/SCALIUM/SQREAM_video.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Major Advantages */}
            <section className="bg-[#f0f9ff] flex flex-col items-center px-6 md:px-[120px] w-full border-b border-[#d0d5dc]">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight h-7 flex items-center">
                                {data.advantages.tag}
                            </span>
                            <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                {data.advantages.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
                        {data.advantages.items.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="bg-white flex flex-col gap-[24px] items-start pb-16 md:pb-[96px] pt-10 md:pt-[56px] px-8 md:px-[40px] rounded-[12px] overflow-hidden"
                            >
                                <div className="flex flex-col justify-center min-h-[80px]">
                                    <h3 className="text-[#121213] text-xl md:text-[28px] font-semibold leading-tight md:leading-[40px] tracking-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="w-4 h-4 rounded-full bg-[#0ea5e9]" />
                                <div className="flex flex-col text-[#25272e] text-base md:text-[18px] font-normal leading-relaxed md:leading-[28px] tracking-tight whitespace-pre-wrap">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Comparison Table */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[48px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {data.comparison.tag}
                            </span>
                            <div className="flex flex-col gap-3 items-start">
                                <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                    {data.comparison.title}
                                </h2>
                                <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight max-w-[1000px]">
                                    {data.comparison.description}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Table */}
                    <div className="w-full overflow-x-auto rounded-[6px] border border-[#d0d5dc]">
                        <table className="w-full min-w-[1000px] border-collapse">
                            <thead>
                                <tr className="border-b border-[#d0d5dc]">
                                    {data.comparison.headers.map((header: string, i: number) => (
                                        <th
                                            key={i}
                                            className={`p-6 text-lg font-semibold tracking-tight text-left ${i === 3 ? "bg-[#0ea5e9] text-white text-center w-[30%]" : "bg-[#f5f6f7] text-[#25272e] " + (i === 0 ? "w-[240px]" : "")
                                                }`}
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.comparison.rows.map((row: string[], rowIndex: number) => (
                                    <tr key={rowIndex} className="border-b border-[#d0d5dc] last:border-0 font-medium">
                                        {row.map((cell: string, cellIndex: number) => (
                                            <td
                                                key={cellIndex}
                                                className={`p-6 text-[18px] leading-[28px] tracking-tight ${cellIndex === 0 ? "font-semibold text-[#25272e]" : "text-[#25272e]"
                                                    } ${cellIndex === 3 ? "bg-[#f0f9ff]" : "bg-white"
                                                    }`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 4: Use Cases */}
            <section className="bg-[#1d1f23] flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {data.useCases.tag}
                            </span>
                            <h2 className="text-white text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                {data.useCases.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Card List - Using flex to allow items to fill width if there are few */}
                    <div className="flex flex-wrap gap-[24px] w-full">
                        {data.useCases.items.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col gap-6 w-full lg:flex-1 lg:min-w-[400px]">
                                {/* Image Box */}
                                <div className="bg-white h-[160px] md:h-[256px] relative rounded-[12px] overflow-hidden flex items-center justify-center p-6 md:p-12">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="flex flex-col gap-4 items-start">
                                    <div className="px-3 py-1.5 rounded-[4px] border border-[#0ea5e9] flex items-center justify-center">
                                        <span className="text-[#0ea5e9] text-sm font-medium">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#fbfcfd] text-xl font-semibold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#dadee0] text-lg font-medium leading-[28px] tracking-tight">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Partner Capabilities */}
            <section className="bg-white flex flex-col items-center px-6 md:px-[120px] w-full">
                <div className="flex flex-col gap-8 md:gap-[32px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    <ScrollReveal>
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {data.partnerCapabilities.tag}
                            </span>
                            <div className="flex flex-col gap-4 md:gap-[12px] items-start w-full">
                                <h2 className="text-[#121213] text-3xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px]">
                                    {data.partnerCapabilities.title}
                                </h2>
                                <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-wrap">
                                    {data.partnerCapabilities.description}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>


        </div>
    );
}
