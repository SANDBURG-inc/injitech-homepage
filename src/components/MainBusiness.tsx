"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/common/ScrollReveal";

const CARD_BG_1 = "/assets/card-bg-blue.png";
const CARD_BG_2 = "/assets/card-bg-2.png";

type BusinessCardProps = {
    title: string;
    description: string;
    bgType: "gradient" | "image";
    imageSrc?: string;
};

const BusinessCard = ({ title, description, bgType, imageSrc }: BusinessCardProps) => {
    return (
        <div className={`relative flex flex-col items-start pt-[56px] pb-[48px] px-10 lg:p-10 min-h-[480px] rounded-[12px] overflow-hidden group transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] ${bgType === "gradient" ? "bg-gradient-to-l from-[#38bdf8] to-[#0ea5e9]" : ""
            }`}>
            {bgType === "image" && imageSrc && (
                <>
                    <img
                        src={imageSrc}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                </>
            )}

            <div className="relative z-10 flex flex-col h-full justify-between items-start gap-[48px] lg:gap-0">
                <div className="space-y-[16px] lg:space-y-4">
                    <h3 className="text-[24px] font-semibold text-white leading-[36px] tracking-[-0.01em]">
                        {title}
                    </h3>
                    <p className="text-[18px] font-normal text-white leading-[28px] tracking-[-0.01em] whitespace-pre-line">
                        {description}
                    </p>
                </div>

                <div className="h-[160px] lg:h-40 w-full" />
            </div>
        </div>
    );
};

export default function MainBusiness() {
    const { t } = useLanguage();

    const businessData = [
        {
            title: t.mainBusiness.business1.title,
            description: t.mainBusiness.business1.description,
            bgType: "gradient" as const,
        },
        {
            title: t.mainBusiness.business2.title,
            description: t.mainBusiness.business2.description,
            bgType: "image" as const,
            imageSrc: CARD_BG_1,
        },
        {
            title: t.mainBusiness.business3.title,
            description: t.mainBusiness.business3.description,
            bgType: "gradient" as const,
        },
        {
            title: t.mainBusiness.business4.title,
            description: t.mainBusiness.business4.description,
            bgType: "image" as const,
            imageSrc: CARD_BG_2,
        },
    ];

    return (
        <section className="w-full bg-white flex flex-col items-center">
            <div className="w-full max-w-[1400px] flex flex-col py-20 lg:py-[160px] px-5 lg:px-0">
                {/* Title Content */}
                <ScrollReveal>
                    <div className="flex flex-col gap-[32px] lg:gap-8 mb-[40px] lg:mb-[72px]">
                        <span className="text-[16px] lg:text-[20px] font-medium text-primary tracking-[-0.01em] leading-6 lg:leading-7">
                            {t.mainBusiness.tag}
                        </span>
                        <div className="flex flex-col gap-[12px] lg:space-y-3">
                            <h2 className="text-[28px] lg:text-[48px] font-semibold lg:font-medium text-[#121213] leading-[40px] lg:leading-[64px] tracking-[-0.01em] break-keep">
                                {t.mainBusiness.title}
                            </h2>
                            <p className="text-[18px] lg:text-[24px] font-medium text-[#495461] leading-[28px] lg:leading-[36px] tracking-[-0.01em] break-keep whitespace-pre-line">
                                {t.mainBusiness.description}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Card Grid */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessData.map((data, index) => (
                            <BusinessCard key={index} {...data} />
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
