"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const VIDEO_SRC = "/videos/technology-background-information-technology-2025-10-16-07-09-56-utc.mp4";

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative w-full h-[125vh] overflow-hidden flex items-center justify-center bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src={VIDEO_SRC} type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] px-8 sm:px-10 flex flex-col items-center text-center">
                <div className="mb-8 lg:mb-12 space-y-4">
                    <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.2] lg:leading-[72px] tracking-[-0.01em] text-white">
                        <span className="block lg:hidden opacity-0 animate-fade-in-up leading-relaxed whitespace-pre-line">
                            {t.hero.mobileTitle}
                        </span>
                        <span className="hidden lg:block opacity-0 animate-fade-in-up whitespace-pre-line">
                            {t.hero.desktopTitle}
                        </span>
                    </h1>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-fade-in-up animation-delay-400">
                    <button className="h-12 lg:h-16 px-8 lg:px-8 bg-primary rounded-lg flex items-center justify-center gap-3 group hover:bg-primary/90 hover:scale-[1.02] transition-all active:scale-[0.98] cursor-pointer w-full sm:w-auto">
                        <span className="text-[16px] lg:text-lg font-semibold text-white tracking-tight">
                            {t.hero.viewMore}
                        </span>
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="h-12 lg:h-16 px-8 lg:px-8 bg-white border border-primary rounded-lg flex items-center justify-center gap-3 group hover:bg-white/90 hover:scale-[1.02] transition-all active:scale-[0.98] cursor-pointer w-full sm:w-auto">
                        <span className="text-[16px] lg:text-lg font-semibold text-primary tracking-tight">
                            {t.hero.getBrochure}
                        </span>
                        <img
                            src="/assets/download-icon.png"
                            alt="Download"
                            className="w-5 lg:w-6 h-5 lg:h-6 object-contain group-hover:translate-y-0.5 transition-transform"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
