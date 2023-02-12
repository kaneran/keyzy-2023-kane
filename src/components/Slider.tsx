import { SliderProps } from "@/interfaces/SliderProps";

export default function Slider({label, min, max} : SliderProps) {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
                <label className="block text-black md:text-left mb-1 md:mb-0 pr-4">
                    {label}
                </label>
            </div>
            <div className="md:w-1/2">
                {`${min}%`}
                <input
                className="w-10/12"
                    type="range"
                    min="0" max="5"
                    step="1" />
                    {`${max}%`}
            </div>
        </div>
    )
}