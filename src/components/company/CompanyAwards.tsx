'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function CompanyAwards() {
    const { t } = useLanguage();
    const awards = t.company.history.awards;

    return (
        <div className="w-full bg-white flex flex-col items-center">
            {/* Awards Header */}
            <div className="w-full max-w-[1400px] px-5 lg:px-0 py-[80px] md:py-[160px]">
                <div className="flex flex-col items-start gap-[32px]">
                    <span className="text-[#0EA5E9] text-[16px] md:text-[20px] font-medium leading-[28px] tracking-[-0.2px] uppercase">
                        {awards.tag}
                    </span>
                    <div className="flex flex-col gap-[12px] md:gap-[24px]">
                        <h2 className="text-[#121213] text-[24px] md:text-[48px] font-bold md:font-medium leading-[34px] md:leading-[64px] tracking-[-0.48px] whitespace-pre-line">
                            {awards.title}
                        </h2>
                        <p className="text-[#495461] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] tracking-[-0.24px] whitespace-pre-line font-medium">
                            {awards.subtitle}
                        </p>
                    </div>
                </div>

                {/* Awards Grid */}
                <div className="mt-[60px] md:mt-[64px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[24px]">
                    {awards.items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col gap-[24px]">
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] bg-[#F5F6F7] rounded-[12px] overflow-hidden flex items-center justify-center p-[40px]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title2}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-[16px]">
                                <div className="text-[#25272E] text-[18px] md:text-[20px] font-semibold leading-[28px] tracking-[-0.2px] whitespace-pre-line">
                                    <p>{item.title1}</p>
                                    <p>{item.title2}</p>
                                </div>
                                <span className="text-[#A6A6A6] text-[14px] md:text-[16px] font-normal leading-[24px] tracking-[-0.16px]">
                                    {item.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
