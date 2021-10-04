import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import QuizContainer from "../components/QuizContainer";
import Option from "../components/Option";

import { useFormik } from "formik";

import { Button, FormLabel, Box } from "@mui/material";

import { useAppContext } from "../context/app";

const Quiz: React.FC = () => {
    const { APIResponse, numberOfQuestions } = useAppContext()
    const [currentQuestion, setCurrentQuestion] = useState<number>(1)
    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            answer: 0
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    const handleNextQuestion = (() => {
        setCurrentQuestion(currentQuestion + 1)
    })
    const handlePreviousQuestion = (() => {
        setCurrentQuestion(currentQuestion - 1)
    })
    return (
        <PageContainer>
            <QuizContainer>
                <Box component="form" onSubmit={handleSubmit}>
                    {APIResponse.results.map((question, index) => {
                        if (index !== currentQuestion) return null
                        return <FormLabel sx={{ fontSize: "1.15rem" }} key={`${question.category}: ${index}`}>{question.question}</FormLabel>
                    })}
                    {APIResponse.results.map((question, index) => {
                        if (index !== (currentQuestion - 1)) return null
                        return (
                            <div className="my-8" key={`${question.difficulty}: ${index}`}>
                                {question.incorrect_answers.map((ianswer, index) => {
                                    return (
                                        <Option
                                            key={`${ianswer}: ${index}`}
                                            text={ianswer}
                                            onChange={handleChange}
                                            selected
                                        />
                                    )
                                })}
                                <Option selected onChange={handleChange} key={`${question.correct_answer}: ${index}`} text={question.correct_answer} />
                            </div>

                        )
                    })}
                    <Button type="button" disabled={currentQuestion === 1} onClick={handlePreviousQuestion}>Voltar</Button>
                    {currentQuestion < numberOfQuestions && <Button type="button" onClick={handleNextQuestion}>Avançar</Button>}
                    {currentQuestion == numberOfQuestions && <Button type="submit" >Finalizar</Button>}
                </Box>
            </QuizContainer>
        </PageContainer>
    )
}

export default Quiz;