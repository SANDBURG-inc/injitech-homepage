import React from "react";
import SolutionPageClient from "./SolutionPageClient";

export function generateStaticParams() {
    return [
        { slug: [] },
        { slug: ["sas"] },
        { slug: ["medallia"] },
        { slug: ["scailium"] },
    ];
}

export default function SolutionPage() {
    return <SolutionPageClient />;
}
