"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function UseCases() {
    const { t } = useLanguage();

    const useCaseItems = [
        {
            category: t.useCases.items.useCase1.category,
            title: t.useCases.items.useCase1.title,
            image: "/assets/use-cases/img.png",
        },
        {
            category: t.useCases.items.useCase2.category,
            title: t.useCases.items.useCase2.title,
            image: "/assets/use-cases/img2.png",
        },
        {
            category: t.useCases.items.useCase3.category,
            title: t.useCases.items.useCase3.title,
            image: "/assets/use-cases/img3.png",
        },
        {
            category: t.useCases.items.useCase4.category,
            title: t.useCases.items.useCase4.title,
            image: "/assets/use-cases/img.png",
        },
        {
            category: t.useCases.items.useCase5.category,
            title: t.useCases.items.useCase5.title,
            image: "/assets/use-cases/img.png",
        },
        {
            category: t.useCases.items.useCase6.category,
            title: t.useCases.items.useCase6.title,
            image: "/assets/use-cases/img2.png",
        },
        {
            category: t.useCases.items.useCase7.category,
            title: t.useCases.items.useCase7.title,
            image: "/assets/use-cases/img3.png",
        },
        {
            category: t.useCases.items.useCase8.category,
            title: t.useCases.items.useCase8.title,
            image: "/assets/use-cases/img.png",
        },
        {
            category: t.useCases.items.useCase9.category,
            title: t.useCases.items.useCase9.title,
            image: "/assets/use-cases/img4.png",
        },
        {
            category: t.useCases.items.useCase10.category,
            title: t.useCases.items.useCase10.title,
            image: "/assets/use-cases/img5.png",
        },
        {
            category: t.useCases.items.useCase11.category,
            title: t.useCases.items.useCase11.title,
            image: "/assets/use-cases/img6.png",
        },
        {
            category: t.useCases.items.useCase12.category,
            title: t.useCases.items.useCase12.title,
            image: "/assets/use-cases/img4.png",
        },
    ];

    return (
        <section className="w-full bg-[#1D1F23] flex flex-col items-center">
            <div className="w-full max-w-[1400px] flex flex-col pt-[160px] pb-[160px] px-5 lg:px-0">
                {/* Header Content */}
                <ScrollReveal>
                    <div className="flex flex-col gap-[16px] mb-[72px]">
                        <span className="text-[20px] font-medium text-[#0EA5E9] tracking-[-0.2px] leading-[1.4] font-['Inter']">
                            {t.useCases.tag}
                        </span>
                        <div className="flex flex-col gap-[12px]">
                            <h2 className="text-[48px] font-semibold text-white leading-[1.33] tracking-[-0.48px] break-keep font-['Inter']">
                                {t.useCases.title}
                            </h2>
                            <p className="text-[24px] font-medium text-[#DADEE0] leading-[1.5] tracking-[-0.24px] break-keep whitespace-pre-line font-['Inter']">
                                {t.useCases.description}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Case Grid */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-[64px]">
                        {useCaseItems.map((item, index) => (
                            <div key={index} className="flex flex-col gap-6 group cursor-pointer">
                                <div className="w-full h-[320px] bg-white rounded-[12px] overflow-hidden flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-4 items-start">
                                    <div className="px-3 py-1.5 border border-[#0EA5E9] rounded-[4px] flex items-center justify-center">
                                        <span className="text-[14px] font-semibold text-[#0EA5E9] leading-[1.43] font-['Inter']">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-[20px] font-semibold text-[#FBFCFD] leading-[1.4] tracking-[-0.2px] break-keep whitespace-pre-line font-['Inter']">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
