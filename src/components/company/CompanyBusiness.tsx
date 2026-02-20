"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "../common/ScrollReveal";

export default function CompanyBusiness() {
    const { t } = useLanguage();

    return (
        <div className="bg-white flex flex-col items-center">
            {/* Header Section */}
            <div className="w-full max-w-[1400px] px-5 lg:px-0 pt-[80px] md:pt-[200px] pb-[60px] md:pb-[160px]">
                <ScrollReveal>
                    <div className="flex flex-col items-start">
                        <span className="text-[#0EA5E9] text-[16px] md:text-[20px] font-medium leading-[28px] tracking-[-0.2px] uppercase mb-[12px] md:mb-[32px]">
                            {t.company.business.tag}
                        </span>
                        <div className="flex flex-col gap-[12px] md:gap-[24px]">
                            <h2 className="text-[#121213] text-[24px] md:text-[48px] font-bold md:font-medium leading-[34px] md:leading-[64px] tracking-[-0.48px] whitespace-pre-line">
                                {t.company.business.title}
                            </h2>
                            <p className="text-[#495461] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] tracking-[-0.24px] whitespace-pre-line font-medium">
                                {t.company.business.subtitle}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Business Item Cards */}
                <div className="mt-[60px] md:mt-[72px] flex flex-col gap-[80px] md:gap-[160px]">
                    {t.company.business.items.map((item: any, index: number) => {
                        const isEven = index % 2 === 1;
                        return (
                            <ScrollReveal key={item.id}>
                                <div
                                    className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-[40px] md:gap-[72px]`}
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full md:w-[664px] h-[240px] md:h-[480px] rounded-[12px] overflow-hidden group shadow-lg shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col flex-1 justify-center md:justify-start md:py-[72px] gap-[24px] md:gap-[40px]">
                                        <div className="flex flex-col gap-[12px] md:gap-[16px]">
                                            <span className="text-[#121213] text-[16px] md:text-[20px] font-semibold tracking-[-0.2px] leading-none">
                                                {item.id}
                                            </span>
                                            <h3 className="text-[#121213] text-[24px] md:text-[32px] font-semibold tracking-[-0.32px] leading-none">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-[#25272E] text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[-0.18px] whitespace-pre-line font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
