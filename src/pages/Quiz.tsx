import { useState, useEffect, Fragment } from "react"
import { useHistory } from "react-router"
import { useFormik } from "formik"
import { useAppContext } from "../context/app"

import PageContainer from "../components/PageContainer"
import QuizContainer from "../components/QuizContainer"
import Option from "../components/Option"
import Loader from "../components/Loader"
import Report from '../components/Report'
import { Button, Box } from "@mui/material"
interface ResultProps {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    answers: string[],
    given_answer: string,
    incorrect_answers: string[]
}
interface APIResponseProps {
    response_code: number,
    results: ResultProps[]
}

const getCorrectAnswers = (APIResponse: APIResponseProps): number => {
    return APIResponse.results.filter(question => question.correct_answer === question.given_answer).length
}
const getWrongAnswers = (APIResponse: APIResponseProps): number => {
    return APIResponse.results.filter(question => {
        if (question.given_answer === '') return
        return question.correct_answer !== question.given_answer
    }).length
}

const Quiz: React.FC = () => {
    const {
        APIResponse, setAPIResponse, numberOfQuestions,
        loading, setLoading, setReport, report,
        currentQuestion, setCurrentQuestion
    } = useAppContext()
    const router = useHistory()

    const [history, setHistory] = useState<string[]>([])

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            answer: ''
        },
        onSubmit: ({ answer }) => {
            if (!answer) return
            setLoading(true)
            setHistory([...history, answer])
            if (currentQuestion == numberOfQuestions) {
                setLoading(false)
                return router.push('/resultados')
            }
            setCurrentQuestion(currentQuestion + 1)
            setLoading(false)
        }
    })

    useEffect(() => {
        values.answer = ''
        const data = JSON.parse(JSON.stringify(APIResponse))
        history.forEach((answer: any, index: number) => {
            data.results[index].given_answer = answer
        })
        setAPIResponse(data)
    }, [history, setAPIResponse, numberOfQuestions])

    useEffect(() => {
        setReport({ score: { correctAnswers: getCorrectAnswers(APIResponse), wrongAnswers: getWrongAnswers(APIResponse), total: numberOfQuestions } })
    }, [APIResponse, getCorrectAnswers, getWrongAnswers])

    return (
        <Fragment>
            {loading && <Loader />}
            <PageContainer>
                <QuizContainer>
                    <main>
                        <Box sx={{ height: "100%" }} component="form" onSubmit={handleSubmit}>
                            {APIResponse.results.map((question, index) => {
                                if (index !== (currentQuestion - 1)) return null
                                return (
                                    <div key={`${question.difficulty} key: ${index}`} className="mb-6">
                                        <div className="mb-6">
                                            <label className="font-roboto" dangerouslySetInnerHTML={{ __html: question.question }} ></label>
                                        </div>
                                        {question.answers.map((answer, index) => {
                                            return (
                                                <Option
                                                    key={`${answer} key: ${index}`}
                                                    value={answer}
                                                    text={answer}
                                                    selected={values.answer === answer}
                                                    name="answer"
                                                    type="radio"
                                                    onChange={handleChange}
                                                />
                                            )
                                        })}
                                    </div>
                                )
                            })}
                            <Button type="submit" variant="contained">
                                {currentQuestion < numberOfQuestions && "Avançar"}
                                {currentQuestion == numberOfQuestions && "Finalizar"}
                            </Button>
                        </Box>
                    </main>
                    <footer className="absolute bottom-4 left-4">
                    <Report>
                        <span>Acertos: {report.score.correctAnswers}</span>
                        <span>Erros: {report.score.wrongAnswers}</span>
                        <span>Total: {currentQuestion}/{numberOfQuestions}</span>
                    </Report>
                    </footer>
                </QuizContainer>
            </PageContainer >
        </Fragment>
    )
}

export default Quiz;