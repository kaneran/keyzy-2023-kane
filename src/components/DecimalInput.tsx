import { DecimalInputProps } from "@/interfaces/DecimalInutProps";

export default function DecimalInput({label, defaultText} : DecimalInputProps) {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
                <label className="block text-black md:text-left mb-1 md:mb-0 pr-4">
                    {label}
                </label>
            </div>
            <div className="md:w-1/8">
                <input className="bg-azure appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white" id="inline-full-name" type="text" value={`${defaultText}%`} />
            </div>
        </div>
    )
}