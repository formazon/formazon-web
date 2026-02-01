"use client";

interface ContactCardProps {
    title: string;
    href: string;
    /** true = open in new tab (external/mailto handled via href) */
    external?: boolean;
}

export function ContactCard({ title, href, external = false }: ContactCardProps) {
    const isExternal = external || href.startsWith("http");
    const linkProps = isExternal
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {};

    return (
        <article className="group w-full border-t-[1.5px] border-black-20 bg-surface transition-[border-color] duration-300 ease-out hover:border-foreground">
            <a
                href={href}
                className="relative flex h-[96px] w-full cursor-pointer items-center text-left md:h-[120px]"
                {...linkProps}
            >
                <h3 className="subtitle-medium pr-10">{title}</h3>
                <span
                    className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center text-black-40 transition-colors group-hover:text-foreground"
                    aria-hidden
                >
                    <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-colors duration-300 ease-out"
                        aria-hidden
                    >
                        <line
                            y1="-1"
                            x2="32"
                            y2="-1"
                            transform="matrix(0.707107 -0.707107 0.704132 0.710069 14 35.3135)"
                            stroke="currentColor"
                            strokeWidth={2}
                        />
                        <path
                            d="M16 12H36V32"
                            stroke="currentColor"
                            strokeWidth={2}
                        />
                    </svg>
                </span>
            </a>
        </article>
    );
}
