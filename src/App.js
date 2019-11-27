import React from 'react'
import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import store from './config/store'
import 'react-perfect-scrollbar/dist/css/styles.css'
import Routes from './Routes'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
// import 'theme-antd.less' // variables to override above
import 'antd/dist/antd.less'
// import '@assets/less/index.less'
// import '@assets/less/my-custom-antdesign-theme.less'

const browserHistory = createBrowserHistory()

function App () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
