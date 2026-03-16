"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
    const { t: translations } = useLanguage();
    const t = translations.inquiryModal;
    const [mounted, setMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        organization: "",
        name: "",
        phone: "",
        email: "",
        jobTitle: "",
        productInterest: "",
        agreement: false,
    });

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setSubmitStatus("idle");
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS credentials are missing.");
            alert("EmailJS 설정이 필요합니다. (.env.local 파일을 확인해주세요)");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const templateParams = {
                organization: formData.organization,
                from_name: formData.name,
                job_title: formData.jobTitle || "N/A",
                from_phone: formData.phone,
                from_email: formData.email,
                product_interest: formData.productInterest,
                message: `상담 신청 제품: ${formData.productInterest}\n소속: ${formData.organization}\n직함: ${formData.jobTitle || '미입력'}`,
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            setSubmitStatus("success");
            setTimeout(() => {
                onClose();
                setFormData({
                    organization: "",
                    name: "",
                    phone: "",
                    email: "",
                    jobTitle: "",
                    productInterest: "",
                    agreement: false,
                });
            }, 2000);
        } catch (error) {
            console.error("Failed to send inquiry:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && !isSubmitting) {
            onClose();
        }
    };

    const modalContent = (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn"
            onClick={handleBackdropClick}
        >
            <div className="bg-white w-full max-w-[1200px] max-h-[90vh] overflow-y-auto rounded-lg shadow-xl animate-scaleIn">
                <div className="flex flex-col md:flex-row min-h-[600px]">
                    {/* Left Panel - Info */}
                    <div className="bg-[#f8f9fa] p-10 md:p-[60px] flex flex-col gap-8 md:w-[400px] flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="flex flex-col gap-4">
                            <span className="text-[#0ea5e9] text-lg font-bold tracking-tight">Contact</span>
                            <h2 className="text-[#121213] text-[32px] font-bold leading-tight whitespace-pre-line tracking-tight">
                                {t.title}
                            </h2>
                            <p className="text-[#495461] text-lg font-medium leading-relaxed whitespace-pre-line mt-2">
                                {t.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="p-10 md:p-[60px] flex flex-col gap-8 md:flex-1 bg-white relative">
                        {submitStatus === "success" ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 text-center animate-fadeIn">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#121213]">신청이 완료되었습니다</h3>
                                <p className="text-[#495461] text-lg">문의하신 내용을 확인 후 빠른 시일 내에 답변 드리겠습니다.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                {/* Organization */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#25272e] text-base font-semibold">
                                        {t.fields.organization.label}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={t.fields.organization.placeholder}
                                        value={formData.organization}
                                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                        className="w-full p-4 border border-[#d0d5dc] rounded-md text-base text-[#25272e] placeholder-[#a6a6a6] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Name & Job Title Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#25272e] text-base font-semibold">
                                            {t.fields.name.label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={t.fields.name.placeholder}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full p-4 border border-[#d0d5dc] rounded-md text-base text-[#25272e] placeholder-[#a6a6a6] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#25272e] text-base font-semibold">
                                            {t.fields.jobTitle.label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={t.fields.jobTitle.placeholder}
                                            value={formData.jobTitle}
                                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                            className="w-full p-4 border border-[#d0d5dc] rounded-md text-base text-[#25272e] placeholder-[#a6a6a6] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>


                                {/* Phone */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#25272e] text-base font-semibold">
                                        {t.fields.phone.label}
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder={t.fields.phone.placeholder}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full p-4 border border-[#d0d5dc] rounded-md text-base text-[#25272e] placeholder-[#a6a6a6] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#25272e] text-base font-semibold">
                                        {t.fields.email.label}
                                    </label>
                                    <input
                                        type="email"
                                        placeholder={t.fields.email.placeholder}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full p-4 border border-[#d0d5dc] rounded-md text-base text-[#25272e] placeholder-[#a6a6a6] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Product Interest - Select */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#25272e] text-base font-semibold">
                                        {t.fields.productInterest.label}
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={formData.productInterest}
                                            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                                            className="w-full p-4 border border-[#d0d5dc] rounded-md text-base text-[#25272e] placeholder-[#a6a6a6] appearance-none focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors bg-white"
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="" disabled>{t.fields.productInterest.placeholder}</option>
                                            <option value="Dell Technologies">Dell Technologies</option>
                                            <option value="HPE">HPE</option>
                                            <option value="VMware">VMware</option>
                                            <option value="Cohesity">Cohesity</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L12 15L18 9" stroke="#9AA2B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Agree Header */}
                                <div className="flex flex-col gap-2 mt-2">
                                    <h3 className="text-[#25272e] text-lg font-semibold">
                                        {t.privacy.title}
                                    </h3>
                                    <div className="text-[#495461] text-sm leading-relaxed whitespace-pre-line bg-gray-50 p-4 rounded-md border border-gray-100 h-[160px] overflow-y-auto">
                                        {t.privacy.content}
                                    </div>
                                </div>

                                {/* Checkbox */}
                                <div
                                    className={`flex items-center gap-2 ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                                    onClick={() => !isSubmitting && setFormData({ ...formData, agreement: !formData.agreement })}
                                >
                                    <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${formData.agreement ? 'bg-[#0ea5e9] border-[#0ea5e9]' : 'bg-white border-[#d0d5dc]'}`}>
                                        {formData.agreement && (
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-[#25272e] text-base font-medium select-none">
                                        {t.privacy.agreeLabel}
                                    </span>
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col gap-2">
                                    <button
                                        type="submit"
                                        disabled={!formData.agreement || isSubmitting}
                                        className={`mt-4 w-full h-[64px] rounded-lg flex items-center justify-center gap-2 text-white text-lg font-semibold transition-all ${formData.agreement && !isSubmitting
                                            ? 'bg-[#0ea5e9] hover:bg-[#0284c7] shadow-lg shadow-blue-500/20'
                                            : 'bg-[#9aa2b0] cursor-not-allowed'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                {t.submitButton}
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M19 12H4.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                    {submitStatus === "error" && (
                                        <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
