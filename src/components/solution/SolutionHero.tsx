import Image from 'next/image';

interface SolutionHeroProps {
    title: string;
    backgroundImage: string;
}

export default function SolutionHero({ title, backgroundImage }: SolutionHeroProps) {
    return (
        <section className="relative h-[400px] md:h-[720px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay (matching Figma bg-black opacity 0.25) */}
                <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-[32px] md:text-[56px] font-semibold leading-tight md:leading-[72px] tracking-[-0.01em]">
                    {title}
                </h1>
            </div>
        </section>
    );
}
