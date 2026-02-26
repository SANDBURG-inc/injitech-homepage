'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CompanyLocation() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'hq' | 'seoul'>('hq');

    const data = t.company.location;
    const currentLoc = activeTab === 'hq' ? data.hq : data.seoul;

    // Map queries should be specific enough. Using Korean addresses for both translations might be more reliable for Google Maps.
    const hqMapQuery = encodeURIComponent('강원도 원주시 입춘로 45');
    const seoulMapQuery = encodeURIComponent('서울특별시 서초구 방배천로 24길 7');
    const mapUrl = activeTab === 'hq'
        ? `https://maps.google.com/maps?q=${hqMapQuery}&t=&z=17&ie=UTF8&iwloc=&output=embed`
        : `https://maps.google.com/maps?q=${seoulMapQuery}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="bg-white flex flex-col items-center px-8 md:px-[120px] w-full">
            <div className="flex flex-col gap-8 md:gap-[48px] items-start pb-20 md:pb-[160px] pt-24 md:pt-[200px] w-full max-w-[1400px]">
                {/* Header & Tabs */}
                <div className="flex flex-col gap-6 md:gap-[32px] items-start w-full">
                    <div className="flex gap-2 items-start shrink-0">
                        <button
                            onClick={() => setActiveTab('hq')}
                            className={`px-8 py-2 rounded-full font-semibold text-base transition-colors ${activeTab === 'hq'
                                    ? 'bg-[#0ea5e9] text-white'
                                    : 'bg-white border border-[#d0d5dc] text-[#495461] hover:bg-gray-50'
                                }`}
                        >
                            {data.tabs.hq}
                        </button>
                        <button
                            onClick={() => setActiveTab('seoul')}
                            className={`px-8 py-2 rounded-full font-semibold text-base transition-colors ${activeTab === 'seoul'
                                    ? 'bg-[#0ea5e9] text-white'
                                    : 'bg-white border border-[#d0d5dc] text-[#495461] hover:bg-gray-50'
                                }`}
                        >
                            {data.tabs.seoul}
                        </button>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-[12px] items-start w-full">
                        <h2 className="text-[#121213] text-2xl md:text-[32px] font-semibold leading-tight md:leading-[48px] tracking-tight">
                            {currentLoc.address}
                        </h2>
                        <div className="text-[#4b5563] text-base md:text-[18px] font-medium leading-relaxed md:leading-[28px] tracking-tight">
                            <p>Tel. {currentLoc.tel}</p>
                            <p>Fax. {currentLoc.fax}</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-[320px] md:h-[480px] rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src={mapUrl}
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
