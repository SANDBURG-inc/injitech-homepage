"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface CompanyHeroProps {
    title: string;
    backgroundImage?: string;
}

export default function CompanyHero({ title, backgroundImage = "/assets/company/hero_bg_new.png" }: CompanyHeroProps) {
    return (
        <section className="relative h-[400px] md:h-[720px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="Company Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay matching Figma bg-black opacity 0.25 */}
                <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Content matching Figma node 358:7816 */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-[32px] md:text-[56px] font-semibold leading-tight md:leading-[72px] tracking-[-0.01em]">
                    {title}
                </h1>
            </div>
        </section>
    );
}
