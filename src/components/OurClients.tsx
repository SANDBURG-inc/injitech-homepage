"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/common/ScrollReveal";

const logos = [
    "/assets/partners/Logo-Card.png",
    "/assets/partners/Logo-Card2.png",
    "/assets/partners/Logo-Card3.png",
    "/assets/partners/Logo-Card4.png",
    "/assets/partners/Logo-Card5.png",
    "/assets/partners/Logo-Card6.png",
    "/assets/partners/Logo-Card7.png",
    "/assets/partners/Logo-Card8.png",
];

const row1 = logos.slice(0, 4);
const row2 = logos.slice(4, 8);

const LogoCard = ({ src }: { src: string }) => (
    <div className="flex-shrink-0 w-[200px] h-[86px] lg:w-[357px] lg:h-[152px] bg-white rounded-[4px] flex items-center justify-center overflow-hidden">
        <img src={src} alt="Client Logo" className="max-w-full max-h-full object-contain transition-all duration-300" />
    </div>
);

const InfiniteRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
    // Triple the items to ensure the marquee is always covered and loops smoothly
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="flex gap-4 lg:gap-6 w-max overflow-visible">
            <div className={`flex gap-4 lg:gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
                {duplicatedItems.map((src, index) => (
                    <LogoCard key={`${src}-${index}`} src={src} />
                ))}
            </div>
        </div>
    );
};

export default function OurClients() {
    const { t } = useLanguage();

    return (
        <section className="w-full bg-white flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-[1400px] flex flex-col pt-[80px] lg:pt-[160px] pb-[40px] lg:pb-[72px] px-8 lg:px-0">
                {/* Header Content */}
                <ScrollReveal>
                    <div className="flex flex-col gap-[32px] lg:gap-8 mb-[48px] lg:mb-[72px]">
                        <span className="text-[16px] lg:text-[20px] font-medium text-[#0ea5e9] tracking-[-0.01em] leading-[24px] lg:leading-7">
                            {t.ourClients.tag}
                        </span>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[28px] lg:text-[48px] font-medium text-[#121213] leading-[40px] lg:leading-[64px] tracking-[-0.01em] break-keep">
                                {t.ourClients.title}
                            </h2>
                            <p className="text-[18px] lg:text-[24px] font-medium text-[#495461] leading-[28px] lg:leading-[36px] tracking-[-0.01em] break-keep">
                                {t.ourClients.description}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Marquee Section */}
            <ScrollReveal className="w-full">
                <div className="relative w-full pb-[80px] lg:pb-[160px]">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex flex-col gap-4 lg:gap-6">
                        <InfiniteRow items={row1} />
                        <div className="ml-[-75px] lg:ml-[-150px]"> {/* Offset second row for visual variety */}
                            <InfiniteRow items={row2} reverse={true} />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
