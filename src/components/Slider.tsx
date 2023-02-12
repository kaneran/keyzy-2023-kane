import { SliderProps } from "@/interfaces/SliderProps";
import { useState } from "react";

export default function Slider({label, min, max, defaultValue, increment} : SliderProps) {
    const [value, setValue] = useState(defaultValue)

    function handleInputChange(e:any){
        setValue(e.target.value)
    }

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
                    min={min} max={max}
                    step={increment} 
                    value={value}
                    onInput={handleInputChange}/>
                    {`${max}%`}
            </div>
        </div>
    )
}