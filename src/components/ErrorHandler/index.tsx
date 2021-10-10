import React, { Component, ErrorInfo, ReactNode } from "react"

import PageContainer from '../PageContainer'
import QuizContainer from '../QuizContainer'

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorHandler extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public render() {
        if (this.state.hasError) {
            return (
                <PageContainer>
                    <QuizContainer>
                        <div className="flex flex-col items-center justify-center h-full">
                            <h1 className="text-2xl text-main-blue-900 font-poppins font-semibold text-center mb-2">Ops... Ocorreu um erro inesperado :(</h1>
                            <h2 className="text-xl text-main-blue-800 font-poppins mb-2">Lamentamos muito pelo ocorrido!</h2>
                            <h3 className="text-lg text-main-blue-700 font-poppins">Tente novamente em alguns minutos.</h3>
                        </div>
                    </QuizContainer>
                </PageContainer>
            )
        }

        return this.props.children;
    }
}

export default ErrorHandler;