"use client";

import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

import { useState } from 'react';
import InquiryModal from './common/InquiryModal';
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Inquiry() {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-white py-[80px] md:py-[60px] md:pb-[160px] flex justify-center px-5">
            <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ScrollReveal className="w-full max-w-[1400px]">
                <div className="relative w-full h-[240px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-[16px]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/85e89cec7f2982793f41c55fb3d37d00a3b2bfc6.png"
                            alt="Inquiry Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-4 md:gap-8 px-5 text-center">
                        <span className="text-[#0EA5E9] text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[28px] tracking-[-0.2px]">
                            {t.inquiry.tag}
                        </span>
                        <h2 className="text-white text-[24px] md:text-[56px] font-bold leading-[36px] md:leading-[1.2] tracking-[-0.56px] break-keep">
                            {t.inquiry.title}
                        </h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-1 md:gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-6 py-3 md:px-10 md:py-5 rounded-[6px] md:rounded-[4px] transition-all group font-semibold text-[16px] md:text-[18px]"
                        >
                            {t.inquiry.button}
                            <img src="/assets/move-right.svg" alt="" className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
