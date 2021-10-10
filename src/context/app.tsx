import React from 'react'
import { createContext, useContext, useState } from 'react';
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

interface ReportProps {
    score: {
        correctAnswers: number,
        wrongAnswers: number,
        total: number
    }
}

type ContextType = {
    numberOfQuestions: number,
    setNumberOfQuestions: React.Dispatch<React.SetStateAction<number>>,
    APIResponse: APIResponseProps,
    setAPIResponse: React.Dispatch<React.SetStateAction<APIResponseProps>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    report: ReportProps,
    setReport: React.Dispatch<React.SetStateAction<ReportProps>>,
    currentQuestion: number,
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
    userIsAllowed: boolean,
    setUserIsAllowed: React.Dispatch<React.SetStateAction<boolean>>,
}

const DEFAULT_VALUE = {
    numberOfQuestions: 0,
    setNumberOfQuestions: () => { },
    APIResponse: {
        response_code: 0,
        results: [{
            category: "",
            type: "",
            difficulty: "",
            question: "",
            correct_answer: "",
            answers: [""],
            incorrect_answers: [""],
            given_answer: ""
        }]
    },
    setAPIResponse: () => { },
    loading: false,
    setLoading: () => { },
    report: {
        score: {
            correctAnswers: 0,
            wrongAnswers: 0,
            total: 0
        }
    },
    setReport: () => { },
    currentQuestion: 1,
    setCurrentQuestion: () => { },
    userIsAllowed: false,
    setUserIsAllowed: () => { }
}

const AppContext = createContext<ContextType>(DEFAULT_VALUE);

export const AppWrapper: React.FC = ({ children }) => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(DEFAULT_VALUE.numberOfQuestions)
    const [APIResponse, setAPIResponse] = useState(DEFAULT_VALUE.APIResponse)
    const [loading, setLoading] = useState(DEFAULT_VALUE.loading)
    const [report, setReport] = useState(DEFAULT_VALUE.report)
    const [currentQuestion, setCurrentQuestion] = useState(DEFAULT_VALUE.currentQuestion)
    const [userIsAllowed, setUserIsAllowed] = useState(DEFAULT_VALUE.userIsAllowed)
    return (
        <AppContext.Provider value={{
            numberOfQuestions, setNumberOfQuestions,
            APIResponse, setAPIResponse,
            loading, setLoading,
            report, setReport,
            currentQuestion, setCurrentQuestion,
            userIsAllowed, setUserIsAllowed
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}