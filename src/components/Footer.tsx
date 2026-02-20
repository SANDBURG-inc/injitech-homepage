"use client";

import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#1D1F23] text-white py-[144px] px-5 flex justify-center">
            <div className="max-w-[1400px] w-full flex flex-col gap-14">
                {/* Logo and Branding Area */}
                <div className="flex flex-col gap-10">
                    <img src="/assets/Logo.svg" alt="Injitech Logo" className="w-[124px] h-auto brightness-0 invert" />

                    {/* Information Blocks Grouped Together for Tighter Spacing */}
                    <div className="flex flex-col gap-6">
                        {/* Company Information */}
                        <div className="flex flex-col text-[#9CA3AF] text-[15px] leading-[1.6] tracking-[-0.15px]">
                            <p>{t.footer.companyInfo}</p>
                            <p>{t.footer.bizNumber}</p>
                            <p>{t.footer.addressSeoul}</p>
                            <p>{t.footer.addressWonju}</p>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col text-[#9CA3AF] text-[15px] leading-[1.6] tracking-[-0.15px]">
                            <p>{t.footer.phoneSeoul}</p>
                            <p>{t.footer.phoneWonju}</p>
                        </div>
                    </div>
                </div>

                {/* Utility Links - Brighter Color as Requested */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#E5E7EB] text-[14px]">
                    <Link href="#" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
                    <Link href="#" className="hover:text-white transition-colors">{t.footer.termsOfService}</Link>
                    <Link href="#" className="hover:text-white transition-colors">{t.footer.thirdPartyConsent}</Link>
                    <Link href="#" className="hover:text-white transition-colors">{t.footer.collectInfoGuide}</Link>
                </div>
            </div>
        </footer>
    );
}
