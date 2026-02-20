'use client';

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const certificates = [
    { id: 1, image: '/assets/result/img.png' },
    { id: 2, image: '/assets/result/img2.png' },
    { id: 3, image: '/assets/result/img3.png' },
    { id: 4, image: '/assets/result/img4.png' },
    { id: 5, image: '/assets/result/img5.png' },
];

export default function Results() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < certificates.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Calculate total transform for desktop and mobile
    const getTranslateX = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
            return `-${currentIndex * (280 + 16)}px`; // Card width + gap
        }
        return `-${currentIndex * (320 + 24)}px`; // Card width + gap
    };

    return (
        <section className="bg-white py-[80px] lg:py-[160px] flex justify-center overflow-hidden">
            <div className="max-w-[1400px] w-full px-5 lg:px-0 flex flex-col gap-[40px] lg:gap-[72px]">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[32px] lg:gap-8">
                        <div className="flex flex-col gap-6">
                            <span className="text-[#0EA5E9] text-[16px] lg:text-[20px] font-medium leading-[24px] lg:leading-[28px] tracking-[-0.16px] lg:tracking-[-0.2px]">
                                {t.results.tag}
                            </span>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-[#1D1F23] text-[28px] lg:text-[48px] font-semibold leading-[40px] lg:leading-[64px] tracking-[-0.28px] lg:tracking-[-0.48px] break-keep">
                                    {t.results.title}
                                </h2>
                                <p className="text-[#4B5563] text-[18px] lg:text-[24px] font-medium leading-[28px] lg:leading-[36px] tracking-[-0.18px] lg:tracking-[-0.24px] break-keep whitespace-pre-line">
                                    {t.results.description}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className={`w-7 h-7 lg:w-[56px] lg:h-[56px] rounded-full border flex items-center justify-center transition-colors ${currentIndex === 0
                                    ? 'border-[#E5E7EB] text-[#E5E7EB] cursor-not-allowed'
                                    : 'border-[#D1D5DB] text-[#4B5563] hover:bg-gray-50'
                                    }`}
                            >
                                <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex === certificates.length - 1}
                                className={`w-7 h-7 lg:w-[56px] lg:h-[56px] rounded-full border flex items-center justify-center transition-colors ${currentIndex === certificates.length - 1
                                    ? 'border-[#E5E7EB] text-[#E5E7EB] cursor-not-allowed'
                                    : 'border-[#D1D5DB] text-[#4B5563] hover:bg-gray-50'
                                    }`}
                            >
                                <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6" />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Carousel Container */}
                <ScrollReveal>
                    <div className="relative overflow-visible">
                        <div
                            className="flex transition-transform duration-500 ease-out gap-4 lg:gap-6"
                            style={{ transform: `translateX(${getTranslateX()})` }}
                        >
                            {certificates.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="flex-shrink-0 w-[280px] lg:w-[320px] aspect-[200/280] lg:aspect-[320/452] bg-white border border-[#E5E7EB] rounded-[4px] p-0 flex items-center justify-center overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                                >
                                    <img
                                        src={cert.image}
                                        alt={`Certificate ${cert.id}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
