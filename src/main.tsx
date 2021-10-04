import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ThemeProvider } from "@material-ui/core/styles";
import { defaultAppTheme } from "./theme";
import { AppWrapper } from './context/app'

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <ThemeProvider theme={defaultAppTheme}>
        <App />
      </ThemeProvider>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
