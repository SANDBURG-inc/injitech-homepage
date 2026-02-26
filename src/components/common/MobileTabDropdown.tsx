"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface MobileTabDropdownProps {
    tabs: Record<string, string>;
    activeTab: string;
    onTabChange: (tabKey: string) => void;
}

export default function MobileTabDropdown({ tabs, activeTab, onTabChange }: MobileTabDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (key: string) => {
        onTabChange(key);
        setIsOpen(false);
    };

    return (
        <div className="w-full relative z-10" ref={dropdownRef}>
            {/* Desktop View: Standard Tabs */}
            <div className="hidden md:flex flex-wrap gap-[8px] items-start">
                {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tabKey) => (
                    <button
                        key={tabKey as string}
                        onClick={() => onTabChange(tabKey as string)}
                        className={`px-[20px] py-[8px] rounded-full text-[16px] font-semibold tracking-tight transition-all border ${activeTab === tabKey
                            ? "bg-[#0ea5e9] text-white border-[#0ea5e9]"
                            : "bg-white text-[#495461] border-[#d0d5dc] hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                            }`}
                    >
                        {tabs[tabKey]}
                    </button>
                ))}
            </div>

            {/* Mobile View: Custom Dropdown */}
            <div className="md:hidden w-full relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#d0d5dc] rounded-[8px] text-[#121213] text-base font-semibold transition-all focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                >
                    <span className="truncate pr-2">{tabs[activeTab]}</span>
                    <ChevronDown className={`w-5 h-5 text-[#495461] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#d0d5dc] rounded-[8px] shadow-lg overflow-hidden flex flex-col max-h-[300px] overflow-y-auto">
                        {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tabKey) => (
                            <button
                                key={tabKey as string}
                                onClick={() => handleSelect(tabKey as string)}
                                className={`w-full text-left px-4 py-3 text-base transition-colors ${activeTab === tabKey
                                    ? "bg-[#f0f9ff] text-[#0ea5e9] font-semibold"
                                    : "text-[#495461] hover:bg-[#f5f6f7] font-medium"
                                    } ${tabKey !== Object.keys(tabs)[Object.keys(tabs).length - 1] ? "border-b border-[#f0f0f0]" : ""}`}
                            >
                                {tabs[tabKey]}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
