import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
    const { t } = useLanguage();

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Type casting to access nested translation objects
    const modalText = (t as any).privacyModal;

    // In case translations aren't loaded yet
    if (!modalText) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 text-[#1D1F23]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-[800px] max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-[20px] font-bold tracking-tight text-[#1D1F23] flex items-center gap-2">
                        {modalText.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label={modalText.close}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                    <div className="space-y-8 text-[15px] leading-[1.6]">
                        {/* Section 1: Collection Purpose */}
                        <div className="space-y-4">
                            <p className="text-gray-700 font-medium">
                                {modalText.desc1}
                            </p>

                            <div className="bg-gray-50 rounded-xl p-5 space-y-4 border border-gray-100">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{modalText.subtitle1}</h3>
                                    <p className="text-gray-600">{modalText.desc2}</p>
                                </div>
                                <div className="h-px bg-gray-200"></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{modalText.subtitle2}</h3>
                                    <p className="text-gray-600 whitespace-pre-wrap">{modalText.desc3}</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Privacy Policy Details */}
                        <div className="space-y-4 pt-6 border-t border-gray-100">
                            <h2 className="text-[18px] font-bold text-gray-900">
                                {modalText.title2}
                            </h2>
                            <p className="text-gray-700">
                                {modalText.desc4}
                            </p>
                            <ul className="space-y-3 pt-2">
                                {[modalText.list1, modalText.list2, modalText.list3, modalText.list4].map((item, index) => (
                                    <li key={index} className="flex gap-3 text-gray-600">
                                        <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#1D1F23]/5 text-[#1D1F23] mt-0.5">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/80 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-[#1D1F23] text-white font-medium rounded-lg hover:bg-black transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        {modalText.close}
                    </button>
                </div>
            </div>
        </div>
    );
}
