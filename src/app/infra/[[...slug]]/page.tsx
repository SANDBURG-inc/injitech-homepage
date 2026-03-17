import React from "react";
import InfraPageClient from "./InfraPageClient";

export function generateStaticParams() {
    return [
        { slug: [] },
        { slug: ["dell"] },
        { slug: ["hpe"] },
        { slug: ["vmware"] },
        { slug: ["cohesity"] },
    ];
}

export default function InfrastructurePage() {
    return <InfraPageClient />;
}
