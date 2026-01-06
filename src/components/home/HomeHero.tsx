// src/components/home/HomeHero.tsx

export type HomeHeroProps = {
    title: string;
    subtitle: string;
};

export function HomeHero({
                             title,
                             subtitle,
                         }: HomeHeroProps) {
    // Разделяем subtitle на два абзаца
    const paragraphs = subtitle.split('\n\n').filter(p => p.trim());

    return (
        <section className="mb-16 space-y-8">
            <div className="space-y-6">
                <h1 className="h1 text-foreground">
                    {title}
                </h1>
                <div className="space-y-4">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="subtitle text-foreground max-w-3xl">
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}