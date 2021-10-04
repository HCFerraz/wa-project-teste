import React from 'react'
import { createContext, useContext, useState } from 'react';

interface OptionProps {
    userAnswer: string
}

interface APIResponseProps {
    response_code: number,
    results: {
        category: string,
        type: string,
        difficulty: string,
        question: string,
        correct_answer: string,
        incorrect_answers: string[],
    }[]
}

type ContextType = {
    numberOfQuestions: number,
    setNumberOfQuestions: React.Dispatch<React.SetStateAction<number>>,
    option: OptionProps,
    setOption: React.Dispatch<React.SetStateAction<OptionProps>>,
    APIResponse: APIResponseProps,
    setAPIResponse: React.Dispatch<React.SetStateAction<APIResponseProps>>,
}

const DEFAULT_VALUE = {
    option: {
        userAnswer: ""
    },
    setOption: () => { },
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
            incorrect_answers: [""],
        }]
    },
    setAPIResponse: () => { },
}

const AppContext = createContext<ContextType>(DEFAULT_VALUE);

export const AppWrapper: React.FC = ({ children }) => {
    const [option, setOption] = useState(DEFAULT_VALUE.option)
    const [numberOfQuestions, setNumberOfQuestions] = useState(DEFAULT_VALUE.numberOfQuestions)
    const [APIResponse, setAPIResponse] = useState(DEFAULT_VALUE.APIResponse)
    return (
        <AppContext.Provider value={{
            option, setOption,
            numberOfQuestions, setNumberOfQuestions,
            APIResponse, setAPIResponse
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}