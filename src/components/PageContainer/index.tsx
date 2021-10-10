const PageContainer: React.FC = ({ children }) => {
  return <div className="bg-gray-400 h-full flex flex-col justify-center p-4 overflow-y-auto">{children}</div>
}

export default PageContainer;