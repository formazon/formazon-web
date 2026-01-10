import Image from "next/image";
import { workCases } from "@/lib/content/work";

type WorkPreviewCardProps = {
    workSlug: string;
};

export function WorkPreviewCard({ workSlug }: WorkPreviewCardProps) {
    const workCase = workCases[workSlug];
    if (!workCase) return null;
    
    const previewImage = workCase.images?.[0] ?? null;
    
    return (
        <div className="bg-surface rounded-sm shadow-lg overflow-hidden w-64">
            {previewImage && (
                <div className="relative aspect-[1.618/1] w-full overflow-hidden bg-surface-muted">
                    <Image
                        src={previewImage.src}
                        alt={previewImage.alt}
                        width={previewImage.width}
                        height={previewImage.height}
                        className="h-full w-full object-cover"
                        priority={false}
                    />
                </div>
            )}
            <div className="p-3 space-y-1">
                <h3 className="caption-medium">{workCase.title}</h3>
                <p className="label text-text-muted line-clamp-2">{workCase.description}</p>
            </div>
        </div>
    );
}
