"use client";

import React from "react";
import Image from "next/image";

interface InfraBrandContentProps {
    logo: string;
    title: string;
    description: string;
}

export default function InfraBrandContent({ logo, title, description }: InfraBrandContentProps) {
    return (
        <section className="bg-white py-20 md:py-[160px] flex flex-col items-center px-8 md:px-[120px] w-full">
            <div className="flex flex-col gap-12 md:gap-[80px] items-start w-full max-w-[1400px]">
                {/* Logo and Title */}
                <div className="flex flex-col items-start gap-6 md:gap-[32px]">
                    <div className="relative w-[200px] h-[60px] md:w-[320px] md:h-[100px]">
                        <Image
                            src={logo}
                            alt={`${title} logo`}
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#121213] text-2xl md:text-[40px] font-semibold leading-tight md:leading-[56px] tracking-tight">
                            {title}
                        </h2>
                        <p className="text-[#4b5563] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight whitespace-pre-line max-w-[800px]">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Decorative Line */}
                <div className="w-full h-px bg-[#E5E7EB]" />
            </div>
        </section>
    );
}
