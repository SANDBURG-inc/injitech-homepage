"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "fade-in-up" | "fade-in";
    delay?: number; // Delay in milliseconds
    className?: string;
}

export default function ScrollReveal({
    children,
    animation = "fade-in-up",
    delay = 0,
    className = "",
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    let animationClass = "";
    if (isVisible) {
        animationClass = animation === "fade-in-up" ? "animate-fade-in-up" : "animate-fade-in";
    } else {
        animationClass = "opacity-0";
    }

    return (
        <div
            ref={ref}
            className={`${className} ${animationClass}`}
            style={delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
