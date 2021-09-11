import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import todoSlice from './Store/todoslice'

const store=configureStore({reducer:{todoSlice}})

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
