import { Container, ContainerProps } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        padding: "1rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        backgroundColor: "#fff",
        height: "100%",
        borderRadius: 12
    }
})

const QuizContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
    const classes = useStyles()
    return <Container disableGutters className={classes.root} {...props}>{children}</Container>
}

export default QuizContainer;