import { ButtonOptionsProps } from "@/interfaces/ButtonOptionsProps";

export default function ButtonOptions({ label, default: string, options }: ButtonOptionsProps) {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
                <label className="block text-black md:text-left mb-1 md:mb-0 pr-4">
                    {label}
                </label>
            </div>
            <div className="md:w-1/2 md:flex justify-evenly">
                {options.map((option) => <button className="bg-azure hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-3.5">
                    {option}
                </button>)}
            </div>
        </div>
    )
}