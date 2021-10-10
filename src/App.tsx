import Loader from './components/Loader'
import { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import useReadLocalStorage from './hooks/useReadLocalStorage'
import { useAppContext } from './context/app'

const Home = lazy(() => import('./pages/Home'))
const Intermediate = lazy(() => import('./pages/Intermediate'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Result = lazy(() => import('./pages/Result'))
const History = lazy(() => import('./pages/History'))


function App() {
  const reportsKey = useReadLocalStorage('reports')
  const { numberOfQuestions, userIsAllowed } = useAppContext()
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/começar" exact>
            {numberOfQuestions ? <Intermediate /> : <Redirect to="/" />}
          </Route>
          <Route path="/quiz" exact>
            {userIsAllowed ? <Quiz /> : <Redirect to="/" />}
          </Route>
          <Route path="/resultados" exact>
            {userIsAllowed ? <Result /> : <Redirect to="/" />}
          </Route>
          <Route path="/historico" exact>
            {reportsKey ? <History /> : <Redirect to="/" />}
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
