"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import InquiryModal from "./common/InquiryModal";

export default function Header() {
    const { lang, setLang, t } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const NAV_LINKS = [
        { name: t.nav.company, href: "/company" },
        { name: t.nav.infra, href: "/infra" },
        { name: t.nav.solution, href: "/solution" },
        { name: t.nav.contact, href: "#", onClick: () => setIsModalOpen(true) },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isDrawerOpen]);

    return (
        <>
            <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <header
                className={`fixed top-0 left-0 right-0 z-[50] h-[64px] lg:h-[80px] transition-all duration-300 ${scrolled || isDrawerOpen ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1440px] h-full mx-auto px-5 lg:px-10 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 relative z-50">
                        <Link href="/" className="group" onClick={() => setIsDrawerOpen(false)}>
                            <img
                                src="/assets/Logo.svg"
                                alt="Injitech Logo"
                                className="w-[100px] lg:w-[118px] h-[40px] object-contain transition-transform"
                            />
                        </Link>
                    </div>

                    {/* Navigation (Desktop) */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center space-x-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    {link.onClick ? (
                                        <button
                                            onClick={link.onClick}
                                            className="px-6 py-2 text-[17px] font-medium text-[#fbfcfd]/80 hover:text-[#fbfcfd] hover:bg-white/5 rounded-full transition-all tracking-tight"
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="px-6 py-2 text-[17px] font-medium text-[#fbfcfd]/80 hover:text-[#fbfcfd] hover:bg-white/5 rounded-full transition-all tracking-tight"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop Language Switcher */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <button
                            onClick={() => setLang('ko')}
                            className={`text-[15px] font-medium transition-colors tracking-tight ${lang === 'ko' ? "text-[#fbfcfd]" : "text-[#a6a6a6] hover:text-[#fbfcfd]"
                                }`}
                        >
                            KOR
                        </button>
                        <span className="w-px h-3 bg-[#364050]"></span>
                        <button
                            onClick={() => setLang('en')}
                            className={`text-[15px] font-medium transition-colors tracking-tight ${lang === 'en' ? "text-[#fbfcfd]" : "text-[#a6a6a6] hover:text-[#fbfcfd]"
                                }`}
                        >
                            ENG
                        </button>
                    </div>

                    {/* Mobile Right Icons */}
                    <div className="flex lg:hidden items-center gap-2 relative z-[70]">
                        {/* Language Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="p-2 text-white/90 hover:text-white transition-colors"
                            >
                                <img src="/assets/Header/globe.svg" alt="Language" className="w-6 h-6" />
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-24 py-2 bg-[#1D1F23]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200">
                                    <button
                                        className={`w-full px-4 py-2 text-sm text-left transition-colors ${lang === 'ko' ? "text-white font-semibold flex items-center justify-between" : "text-white/60 hover:bg-white/10"
                                            }`}
                                        onClick={() => {
                                            setLang('ko');
                                            setIsLangOpen(false);
                                        }}
                                    >
                                        KOR
                                        {lang === 'ko' && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                    </button>
                                    <button
                                        className={`w-full px-4 py-2 text-sm text-left transition-colors ${lang === 'en' ? "text-white font-semibold flex items-center justify-between" : "text-white/60 hover:bg-white/10"
                                            }`}
                                        onClick={() => {
                                            setLang('en');
                                            setIsLangOpen(false);
                                        }}
                                    >
                                        ENG
                                        {lang === 'en' && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Hamburger Menu Icon */}
                        <button
                            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                            className="p-2 text-white/90 hover:text-white transition-colors"
                        >
                            {isDrawerOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <img src="/assets/Header/menu.svg" alt="Menu" className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/70 lg:hidden transition-opacity duration-300 pointer-events-auto cursor-pointer ${isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsDrawerOpen(false)}
            >
                {/* Content Area */}
                <div
                    className={`absolute top-0 right-0 w-[80%] h-[100dvh] bg-[#1D1F23] pt-[80px] px-6 transition-transform duration-300 ease-out transform cursor-default ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button Inside Drawer */}
                    <button
                        onClick={() => setIsDrawerOpen(false)}
                        className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <nav>
                        <ul className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    {link.onClick ? (
                                        <button
                                            onClick={() => {
                                                link.onClick?.();
                                                setIsDrawerOpen(false);
                                            }}
                                            className="text-[20px] font-semibold text-white/90 hover:text-white flex items-center justify-between w-full"
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsDrawerOpen(false)}
                                            className="text-[20px] font-semibold text-white/90 hover:text-white flex items-center justify-between"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-12 pt-8 border-t border-white/5 space-y-2">
                        <p className="text-xs text-white/30 uppercase tracking-widest font-bold">Contact</p>
                        <p className="text-sm text-white/60">sales@injitech.co.kr</p>
                        <p className="text-sm text-white/60">02-6012-0810</p>
                    </div>
                </div>
            </div>
        </>
    );
}
