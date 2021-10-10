const Report: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <div {...props} className="flex flex-col justify-center space-y-2 bg-main-blue-700 text-white shadow-2xl rounded-xl w-36 h-24 px-4">
            {children}
        </div>
    )
}

export default Report;