import useReadLocalStorage from "../hooks/useReadLocalStorage";
import Report from "../components/Report";
import ErrorHandler from '../components/ErrorHandler'

const History: React.FC = () => {
    const reportsKey = useReadLocalStorage<any>('reports') || []
    return (
        <ErrorHandler>
            <div className="px-4 py-4">
                <h1 className="text-xl font-medium text-main-blue-900 mb-4">Últimos resultados:</h1>
                <main className="flex flex-wrap gap-4">
                    {reportsKey?.map((report: any, index: number) => {
                        return (
                            <Report key={index}>
                                <span>Acertos: {report.score.correctAnswers}</span>
                                <span>Erros: {report.score.wrongAnswers}</span>
                                <span>Total: {report.score.total}</span>
                            </Report>
                        )
                    })}
                </main>
            </div>
        </ErrorHandler>
    )
}

export default History;