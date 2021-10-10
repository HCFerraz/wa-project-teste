import { Fragment } from 'react'
import { useAppContext } from '../context/app'

import useReadLocalStorage from '../hooks/useReadLocalStorage'

import PageContainer from '../components/PageContainer'
import QuizContainer from '../components/QuizContainer'
import HomeForm from '../layouts/HomeForm'
import Loader from '../components/Loader'
import ReportHistory from '../components/ReportHistory'

import ErrorHandler from '../components/ErrorHandler'

const Home: React.FC = () => {
    const { loading } = useAppContext()
    const reportsKey = useReadLocalStorage('reports')
    return (
        <Fragment>
            <ErrorHandler>
                {loading && <Loader />}
                <PageContainer>
                    <QuizContainer>
                        <h1 className="text-3xl max-w-2xl mb-8">Bem vindo ao <span className="text-main-blue-900 font-semibold"><abbr style={{ textDecoration: "none" }} title="World Knowledge">WK </abbr>Project</span>, aqui você encontrará diversos quizes sobre conhecimento gerais do nosso mundo (e além).</h1>
                        <HomeForm />
                        {reportsKey && <ReportHistory />}
                    </QuizContainer>
                </PageContainer>
            </ErrorHandler>
        </Fragment>
    )
}

export default Home;