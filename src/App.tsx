import { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Intermediate = lazy(() => import('./pages/Intermediate'))
const Quiz = lazy(() => import('./pages/Quiz'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/começar" exact component={Intermediate} />
          <Route path="/quiz" exact component={Quiz} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
