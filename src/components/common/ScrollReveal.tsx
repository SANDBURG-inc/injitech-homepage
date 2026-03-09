import { motion } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "fade-in-up" | "fade-in" | "fade-in-left" | "fade-in-right";
    delay?: number; // Delay in milliseconds
    className?: string;
    duration?: number;
}

const variants = {
    "fade-in-up": {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    "fade-in-left": {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    },
    "fade-in-right": {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 }
    }
};

export default function ScrollReveal({
    children,
    animation = "fade-in-up",
    delay = 0,
    className = "",
    duration = 0.6,
}: ScrollRevealProps) {
    const selectedVariant = variants[animation] || variants["fade-in-up"];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={selectedVariant}
            transition={{
                duration: duration,
                delay: delay / 1000,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
