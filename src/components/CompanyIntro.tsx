"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/common/ScrollReveal";

const VIDEO_SRC = "/videos/establishing-business-office-building-skyscraper-d-2025-08-28-18-40-33-utc (1).mp4";

export default function CompanyIntro() {
    const { t } = useLanguage();

    return (
        <section className="w-full bg-white flex flex-col items-center">
            <div className="w-full max-w-[1400px] flex flex-col pt-[100px] pb-[80px] lg:pt-[200px] lg:pb-[160px] px-5 lg:px-0">
                {/* Text Content */}
                <ScrollReveal>
                    <div className="flex flex-col gap-[32px] lg:gap-8 mb-[40px] lg:mb-[72px]">
                        <span className="text-[16px] lg:text-[20px] font-medium text-primary tracking-[-0.01em] leading-6 lg:leading-7">
                            {t.companyIntro.tag}
                        </span>
                        <div className="flex flex-col gap-[12px] lg:space-y-3">
                            <h2 className="text-[28px] lg:text-[48px] font-semibold lg:font-medium text-[#121213] leading-[40px] lg:leading-[64px] tracking-[-0.01em] break-keep">
                                {t.companyIntro.title}
                            </h2>
                            <p className="text-[18px] lg:text-[24px] font-medium text-[#495461] leading-[28px] lg:leading-[36px] tracking-[-0.01em] break-keep whitespace-pre-line">
                                {t.companyIntro.description}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Video Container */}
                <ScrollReveal>
                    <div className="w-full h-[320px] lg:h-[640px] rounded-[12px] overflow-hidden relative">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={VIDEO_SRC} type="video/mp4" />
                        </video>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
