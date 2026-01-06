import { Dot } from "./Dot";

export function QuadroDot() {
    return (
        <div className="w-full py-0">
            <div className="w-full flex flex-col items-center gap-4">
                <div className="w-full flex items-center justify-between">
                    <Dot />
                    <Dot />
                </div>                
                <div className="w-full flex items-center justify-between">
                    <Dot />
                    <Dot />
                </div>
            </div>
        </div>
    );
}
