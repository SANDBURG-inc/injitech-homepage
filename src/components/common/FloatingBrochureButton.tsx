'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function FloatingBrochureButton() {
    const { t } = useLanguage();

    return (
        <div className="fixed bottom-[104px] right-[24px] md:right-[24px] z-[90]">
            <a
                href="/injitech_brochure.pdf"
                download
                className="group flex items-center justify-center bg-[#0ea5e9] hover:bg-[#0284c7] rounded-full h-[56px] shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out px-[16px]"
            >
                <div className="flex items-center justify-center">
                    <span className="text-white font-semibold text-[15px] lg:text-[16px] max-w-0 overflow-hidden opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:mr-2 lg:group-hover:mr-3 transition-all duration-300 ease-in-out whitespace-nowrap">
                        {t.hero?.getBrochure || "회사소개서 받기"}
                    </span>
                    <img
                        src="/assets/download.svg"
                        alt="Download Brochure"
                        className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5 object-contain"
                    />
                </div>
            </a>
        </div>
    );
}
