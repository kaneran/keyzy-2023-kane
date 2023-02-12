import { ButtonOptionsProps } from "@/interfaces/ButtonOptionsProps";
import { useState } from "react";

export default function ButtonOptions({ label, defaultOption, options }: ButtonOptionsProps) {
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    function handleOnClick(e:any){
        setSelectedOption(e.target.innerText)
        console.log(selectedOption)
    }

    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
                <label className="block text-black md:text-left mb-1 md:mb-0 pr-4">
                    {label}
                </label>
            </div>
            <div className="md:w-1/2 md:flex justify-evenly">
                {options.map((option) => <button className={`${option === selectedOption ? "bg-blue-700" : "bg-azure"} hover:bg-blue-700 text-parchment font-bold py-2 px-4 rounded p-3.5`} onClick={handleOnClick}>
                    {option}
                </button>)}
            </div>
        </div>
    )
}