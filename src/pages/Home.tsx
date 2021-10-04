import PageContainer from '../components/PageContainer'
import QuizContainer from '../components/QuizContainer'
import Option from '../components/Option'
import HomeForm from '../layouts/HomeForm'

const Home: React.FC = () => {
    return (
        <PageContainer>
            <QuizContainer>
                <h1 className="text-3xl max-w-2xl mb-8">Bem vindo ao <span className="text-main-blue-900 font-semibold">WK Project</span>, aqui você encontrará diversos quizes sobre conhecimento gerais do nosso mundo (e além).</h1>
                <HomeForm />
            </QuizContainer>
        </PageContainer>
    )
}

export default Home;