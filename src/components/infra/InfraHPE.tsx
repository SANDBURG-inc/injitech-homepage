"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import InquiryModal from "../common/InquiryModal";
import ScrollReveal from "../common/ScrollReveal";
import MobileTabDropdown from "../common/MobileTabDropdown";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function InfraHPE() {
    const { t } = useLanguage();
    const router = useRouter();
    const [activeSolution, setActiveSolution] = useState<"server" | "storage">("server");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const solutionData = t.infra.hpe.solutions.items[activeSolution];

    return (
        <div className="flex flex-col w-full">
            {/* Section 1: Logo & Intro */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col items-center py-20 md:pb-[160px] md:pt-[200px] w-full max-w-[960px]">
                    <div className="flex flex-col gap-10 md:gap-[56px] items-center text-center w-full">
                        {/* Logo */}
                        <ScrollReveal delay={100} className="w-full flex justify-center">
                            <div className="relative w-[200px] h-[60px] md:w-[252px] md:h-[112px]">
                                <Image
                                    src="/assets/infra/hpe/hpe_logo.png"
                                    alt="HPE Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </ScrollReveal>
                        {/* Intro Text */}
                        <ScrollReveal>
                            <div className="flex flex-col gap-6 w-full">
                                <p className="text-[#121213] text-xl md:text-[32px] font-semibold leading-relaxed md:leading-[48px] tracking-tight md:tracking-[-0.32px] whitespace-normal md:whitespace-pre-line break-keep">
                                    {t.infra.hpe.intro}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Intro Video */}
                        <ScrollReveal delay={200} className="w-full">
                            <div className="w-full relative rounded-2xl overflow-hidden aspect-video shadow-lg bg-[#121213]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/assets/infra/hpe/HPE_video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 2: Major Advantages */}
            <section className="bg-[#f2f9ff] flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
                            <span className="text-[#0ea5e9] text-base md:text-[20px] font-medium tracking-tight">
                                {t.infra.hpe.advantages.tag}
                            </span>
                            <h2 className="text-[#121213] text-2xl md:text-[48px] font-medium leading-tight md:leading-[1.2] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.hpe.advantages.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Advantage Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                    >
                        {t.infra.hpe.advantages.items.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white rounded-[12px] p-8 md:px-10 md:pt-14 md:pb-24 flex flex-col items-start gap-6 md:gap-[24px] w-full shadow-sm"
                            >
                                <h3 className="text-[#121213] text-lg md:text-[28px] font-semibold leading-tight tracking-tight">
                                    {item.title}
                                </h3>
                                <div className="w-4 h-4 rounded-full bg-[#0ea5e9]" />
                                <p className="text-[#25272e] text-sm md:text-[18px] font-normal leading-relaxed tracking-tight whitespace-pre-line">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Major Solution */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal className="relative z-20 w-full">
                        <div className="flex flex-col gap-8 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-base md:text-[20px] font-medium tracking-tight">
                                {t.infra.hpe.solutions.tag}
                            </span>

                            {/* Solution Tabs */}
                            <MobileTabDropdown
                                tabs={t.infra.hpe.solutions.tabs}
                                activeTab={activeSolution}
                                onTabChange={(tabKey) => {
                                    setActiveSolution(tabKey as any);
                                }}
                            />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSolution}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-3 md:gap-[12px] items-start w-full"
                                >
                                    {solutionData.tag && (
                                        <span className="text-[#0ea5e9] text-base md:text-[20px] font-semibold tracking-tight">
                                            {solutionData.tag}
                                        </span>
                                    )}
                                    <h2 className="text-[#121213] text-2xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                        {solutionData.title}
                                    </h2>
                                    <p className="text-[#495461] text-lg md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                        {solutionData.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>

                    {/* Video Content */}
                    <div className="w-full relative rounded-2xl overflow-hidden aspect-video shadow-lg bg-[#121213]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSolution}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                            >
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={solutionData.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            {/* Section 4: Use Cases */}
            <section className="bg-[#121213] flex flex-col items-center px-8 md:px-[120px] w-full border-t border-white/10">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
                            <span className="text-[#0ea5e9] text-lg md:text-[20px] font-medium tracking-tight">
                                {t.infra.hpe.useCases.tag}
                            </span>
                            <h2 className="text-white text-2xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.hpe.useCases.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Case Study Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                    >
                        {t.infra.hpe.useCases.items.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col gap-6 w-full"
                            >
                                {/* Image Container */}
                                <div className="bg-white rounded-[20px] flex items-center justify-center aspect-[323/240] w-full px-8 overflow-hidden">
                                    <div className="relative w-full h-full max-h-[200px]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                {/* Text Content */}
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-white text-lg md:text-[20px] font-bold tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#dadee0] text-sm md:text-[18px] font-medium leading-relaxed tracking-tight whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Partner Capabilities */}
            <section className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
                <div className="flex flex-col gap-10 md:gap-[72px] items-start py-20 md:py-[160px] w-full max-w-[1400px]">
                    {/* Header */}
                    <div className="flex flex-col gap-4 md:gap-[32px] items-start text-left w-full">
                        <span className="text-[#0ea5e9] text-base md:text-[20px] font-medium tracking-tight">
                            {t.infra.hpe.capabilities.tag}
                        </span>
                        <div className="flex flex-col gap-4 md:gap-[12px] items-start">
                            <h2 className="text-[#121213] text-2xl md:text-[48px] font-medium leading-tight md:leading-[64px] tracking-tight md:tracking-[-0.48px] whitespace-pre-line">
                                {t.infra.hpe.capabilities.title}
                            </h2>
                            <p className="text-[#495461] text-sm md:text-[24px] font-medium leading-relaxed md:leading-[36px] tracking-tight md:tracking-[-0.24px] whitespace-pre-line">
                                {t.infra.hpe.capabilities.description}
                            </p>
                        </div>
                    </div>

                    {/* Capability Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                    >
                        {t.infra.hpe.capabilities.items.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-[#f0f9ff] rounded-[12px] pb-12 pt-10 px-8 md:pb-[96px] md:pt-[56px] md:px-[40px] flex flex-col items-start gap-4 md:gap-[24px] w-full overflow-hidden"
                            >
                                <h3 className="text-[#121213] text-lg md:text-[28px] font-semibold leading-tight md:leading-[40px] tracking-tight md:tracking-[-0.28px] whitespace-pre-wrap">
                                    {item.title}
                                </h3>
                                <p className="text-[#25272e] text-sm md:text-[18px] font-normal leading-relaxed md:leading-[28px] tracking-tight md:tracking-[-0.18px] whitespace-pre-wrap">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
