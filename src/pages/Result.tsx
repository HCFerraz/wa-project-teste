import { useEffect, Fragment } from "react"
import { useAppContext } from "../context/app"
import useLocalStorage from "../hooks/useLocalStorage"
import useReadLocalStorage from "../hooks/useReadLocalStorage"

import PageContainer from "../components/PageContainer"
import QuizContainer from "../components/QuizContainer"
import Option from "../components/Option"
import Report from "../components/Report"
import Loader from "../components/Loader"
import { Box } from "@mui/material"
import ErrorHandler from '../components/ErrorHandler'

const Result: React.FC = () => {
    const { APIResponse, loading, report, numberOfQuestions, currentQuestion } = useAppContext()

    const [, setReportInLocal] = useLocalStorage('reports', [report])
    const reportsKey = useReadLocalStorage<any>('reports')

    useEffect(() => {
        const setLocalStorage = () => {
            const dataFromLocal = reportsKey || []
            dataFromLocal.push(report)
            setReportInLocal(dataFromLocal)
        }
        setLocalStorage()
    }, [])

    return (
        <Fragment>
            <ErrorHandler>
                {loading && <Loader />}
                <PageContainer>
                    <QuizContainer>
                        <header className="flex flex-col md:flex-row md:items-center h-10 mb-24 md:mb-4">
                            <h1 className="text-main-blue-900 text-xl font-semibold mb-2 md:mb-0">Resultado:</h1>
                            <div className="flex md:ml-4 items-center ml-1 mb-1 md:mb-0">
                                <div className="h-5 w-5 bg-red-800 mr-2"></div>
                                <span>Ops, você errou a resposta :(</span>
                            </div>
                            <div className="flex items-center ml-1 mb-1 md:mb-0 md:ml-4">
                                <div className="h-5 w-5 bg-green-500 mr-2"></div>
                                <span>Essa é a resposta correta!</span>
                            </div>
                            <div className="flex items-center ml-1 md:ml-4">
                                <div className="h-5 w-5 bg-primary-green mr-2"></div>
                                <span>Parabéns! Você acertou! :)</span>
                            </div>
                        </header>
                        <Box component="main">
                            <div className="py-2 max-h-[300px] sm:max-h-[360px] md:max-h-[480px] overflow-y-scroll rounded-md">
                                {APIResponse.results.map((question, index) => {
                                    return (
                                        <div className="mb-8" key={`${question.difficulty} key: ${index}`}>
                                            <div className="mb-6">
                                                <label dangerouslySetInnerHTML={{ __html: question.question }} ></label>
                                            </div>
                                            {question.answers.map((answer, index) => {
                                                return (
                                                    <Option
                                                        key={`${answer} key: ${index}`}
                                                        value={answer}
                                                        text={answer}
                                                        wrong={question.correct_answer !== answer}
                                                        right={question.correct_answer === answer}
                                                        selected={question.given_answer === answer}
                                                        name="answer"
                                                        type="radio"
                                                    />
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </Box>
                        <footer className="mt-4">
                            <Report>
                                <span>Acertos: {report.score.correctAnswers}</span>
                                <span>Erros: {report.score.wrongAnswers}</span>
                                <span>Total: {currentQuestion}/{numberOfQuestions}</span>
                            </Report>
                        </footer>
                    </QuizContainer>
                </PageContainer >
            </ErrorHandler>
        </Fragment>
    )
}

export default Result;