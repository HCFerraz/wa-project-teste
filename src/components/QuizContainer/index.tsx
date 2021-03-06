import { Container, ContainerProps } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        padding: "1rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        backgroundColor: "#fff",
        height: "100%",
        borderRadius: 12,
        position: "relative",
        overflowY: "auto"
    }
})

const QuizContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
    const classes = useStyles()
    return <div className="p-4 bg-white h-full rounded-xl relative overflow-y-auto lg:overflow-y-hidden" {...props}>{children}</div>
}

export default QuizContainer;