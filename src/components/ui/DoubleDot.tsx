import { Dot } from "./Dot";

export function DoubleDot() {
    return (
        <div className="w-full py-0">
                <div className="w-full flex items-center justify-between">
                    <Dot />
                    <Dot />
                </div>                
        </div>
    );
}
