interface OptionBaseProps {
    text: string,
    selected: boolean
}

type OptionStandardProps = React.HTMLAttributes<HTMLDivElement> & OptionBaseProps

const Option: React.FC<OptionStandardProps> = ({ text, selected, children, ...props }) => {

    return (
        <input
            className={`flex transition-all placeholder-black hover:placeholder-white
        hover:bg-main-blue-500 hover:border-4 cursor-pointer items-center
         break-all px-2 font-poppins text-sm min-w-[14rem] 
         w-full max-w-[18rem] min-h-[2.5rem] border-2 border-gray-500/20 
         rounded-md mb-4 ${selected && "bg-main-blue-500 placeholder-white border-4"}`}
            readOnly
            placeholder={text}
            {...props}
        />
    )
}

export default Option;