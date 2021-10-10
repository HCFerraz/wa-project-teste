import { memo } from 'react'
interface OptionBaseProps {
    text: string,
    selected?: boolean,
    right?: boolean,
    wrong?: boolean
}

type OptionStandardProps = React.InputHTMLAttributes<HTMLInputElement> & OptionBaseProps

const Option: React.FC<OptionStandardProps> = ({ text, selected, right, wrong, children, ...props }) => {
    return (
        <div style={selected && right && { backgroundColor: "#33a4a6" } || wrong && selected && { backgroundColor: "rgb(185, 28, 28)" } || { }} className={`transition-all group relative border-2 border-gray-500/20 rounded-md 
        hover:bg-main-blue-500 mb-4 min-w-[14rem] w-full max-w-[18rem] min-h-[2.5rem] cursor-pointer ${selected ? "bg-main-blue-500" : ""} ${selected && wrong ? "bg-red-700 hover:bg-red-700" : ""}  ${right ? "bg-green-500 hover:bg-green-500" : ""} ${right && selected ? "bg-primary-green hover:bg-primary-green" : ""}`}
        >
            <input className="absolute w-full h-full opacity-0 cursor-pointer" placeholder={text} {...props} />
            <span className={`flex px-2 items-center transition-all font-poppins text-sm text-black group-hover:text-white break-all w-full min-h-[2.5rem] ${selected && "text-white"} ${right && "text-[#fff]"}`} dangerouslySetInnerHTML={{ __html: text }} ></span>
        </div>
    )
}

export default memo(Option);