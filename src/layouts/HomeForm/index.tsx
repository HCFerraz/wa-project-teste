import { useFormik } from 'formik'
import * as yup from 'yup'

import { useAppContext } from '../../context/app'

import { useHistory } from 'react-router'

import { TextField, Box, Button, FormLabel } from "@mui/material"

import { makeStyles } from '@material-ui/styles'

const validationSchema = yup.object({
    numberOfQuestions: yup.number(),
})

const inputStyles = makeStyles({
    root: {
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: 80
    }
})

const boxStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: 768
    }
})

const HomeForm: React.FC = () => {
    const { setNumberOfQuestions } = useAppContext()
    const history = useHistory()
    const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
        initialValues: {
            numberOfQuestions: 0
        },
        onSubmit: ({ numberOfQuestions }) => {
            setNumberOfQuestions(numberOfQuestions)
            history.push("começar")
        },
        validationSchema: validationSchema
    })
    const inputClasses = inputStyles()
    const boxClasses = boxStyles()
    return (
        <Box className={boxClasses.root} component="form" onSubmit={handleSubmit}>
            <FormLabel sx={{ marginBottom: 1, fontSize: "1.25rem" }} >Quantas perguntas deseja responder?</FormLabel>
            <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ marginBottom: 2 }}
                value={values.numberOfQuestions === 0 ? "" : values.numberOfQuestions}
                variant="outlined"
                className={inputClasses.root}
                required
                type="text"
                size="small"
                name="numberOfQuestions"
            />
            {errors.numberOfQuestions && (
                <div className="text-red-500 -mt-2 mb-2">
                    Informe um número para prosseguir
                </div>
            )}
            <Button size="small" variant="contained" type="submit">
                Avançar
            </Button>
        </Box>
    )
}

export default HomeForm