"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "../common/ScrollReveal";

export default function CompanyOverview() {
    const { t, lang } = useLanguage();

    return (
        <div className="bg-white flex flex-col items-center">
            {/* Intro Section - Figma 358:7819 */}
            <div className="w-full max-w-[1400px] py-[60px] md:pt-[200px] md:pb-[160px] px-8 lg:px-0">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center gap-[40px] md:gap-[56px]">
                        <div className="w-[160px] h-[54px] md:w-[330px] md:h-[112px] relative transition-all duration-300">
                            <Image src="/assets/Logo_color.png" alt="Injitech" fill className="object-contain" />
                        </div>
                        <div className="max-w-[960px] text-[20px] md:text-[32px] text-[#121213] leading-[30px] md:leading-[48px] font-semibold tracking-[-0.32px] whitespace-pre-wrap">
                            <span className="hidden md:inline">{t.company.overview.intro.descriptionStrong}</span>
                            <span className="hidden md:inline">{" "}</span>
                            <span className="hidden md:inline">{t.company.overview.intro.descriptionAssistive}</span>
                            <span className="inline md:hidden">{t.company.overview.intro.descriptionMobile}</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Vision Section - Figma 358:7825 */}
            <div className="w-full max-w-[1400px] py-[60px] md:py-[160px] px-8 lg:px-0">
                <div className="h-auto md:h-[640px] relative rounded-[12px] overflow-hidden bg-[#F5F6F7]">
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/company/overview_bg.png"
                            alt="Vision Background"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative z-10 h-full flex flex-col py-10 md:pt-[72px] md:pb-[72px]">
                        <ScrollReveal>
                            <div className="px-8 md:px-[72px] flex flex-col gap-[20px] md:gap-[32px] mb-[40px] md:mb-[48px]">
                                <span className="text-[#0EA5E9] text-[16px] md:text-[20px] font-medium leading-[28px] tracking-[-0.2px] uppercase">
                                    {t.company.overview.vision.title}
                                </span>
                                <h2 className="text-[#121213] text-[24px] md:text-[48px] font-bold md:font-medium leading-[34px] md:leading-[64px] tracking-[-0.48px] whitespace-pre-line">
                                    {t.company.overview.vision.mainTitle}
                                </h2>
                            </div>
                        </ScrollReveal>

                        <div className="px-8 md:px-[72px] grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px]">
                            {t.company.overview.vision.values.map((item: any) => (
                                <div key={item.id} className="bg-white px-[24px] py-[32px] md:px-[40px] md:py-[48px] rounded-[12px] flex flex-col gap-[24px] md:gap-[40px] h-full">
                                    <div className="flex flex-col gap-[8px] md:gap-[16px]">
                                        <span className="text-[#121213] text-[16px] md:text-[20px] font-semibold tracking-[-0.2px] leading-none">{item.id}</span>
                                        <h3 className="text-[#121213] text-[24px] md:text-[32px] font-semibold tracking-[-0.32px] leading-none">{item.title}</h3>
                                    </div>
                                    <p className="text-[#25272E] text-[14px] md:text-[18px] leading-[22px] md:leading-[28px] tracking-[-0.18px] whitespace-pre-line font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Organization Section - Figma 358:7853 */}
            <div className="w-full max-w-[1400px] py-[60px] md:py-[160px] px-8 lg:px-0">
                <div className="flex flex-col gap-[40px] md:gap-[72px] items-start">
                    <ScrollReveal>
                        <div className="flex flex-col gap-[20px] md:gap-[32px] w-full">
                            <span className="text-[#0EA5E9] text-[16px] md:text-[20px] font-medium leading-[28px] tracking-[-0.2px] uppercase">
                                {t.company.overview.organization.label}
                            </span>
                            <h2 className="text-[#121213] text-[24px] md:text-[48px] font-bold md:font-medium leading-[34px] md:leading-[64px] tracking-[-0.48px] whitespace-normal md:whitespace-pre-line">
                                {t.company.overview.organization.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="text-[#121213] text-[20px] md:text-[40px] font-extrabold leading-[28px] md:leading-[56px] tracking-[-0.4px] w-full">
                        {t.company.overview.organization.ceo}
                    </div>

                    <ScrollReveal className="w-full">
                        <div className="w-full relative mt-[8px] md:mt-[16px]">
                            <div className="block md:hidden w-full relative">
                                <Image
                                    src={lang === 'en' ? "/assets/company/organization_mobile_eng.png" : "/assets/company/organization_mobile.png"}
                                    alt="Organization Chart Mobile"
                                    width={800}
                                    height={1600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="hidden md:block w-full relative">
                                <Image
                                    src={lang === 'en' ? "/assets/company/organization_pc_eng.png" : "/assets/company/organization_pc.png"}
                                    alt="Organization Chart PC"
                                    width={2800}
                                    height={1200}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
