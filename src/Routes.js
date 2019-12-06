import React from 'react'
import { inject, observer } from 'mobx-react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import TaiKhoan from 'views/TaiKhoan'
import Dashboard from 'views/dashboard'
import TaiKhoanThanhToan from 'views/TaiKhoanThanhToan'
import LayoutApp from './views/layout'


const Routes = props => {
  const {
    store: { authentication }
  } = props

  if (!authentication.isLogin) {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/dashboard' />

          <Route path='/dashboard'>
            <LayoutApp>
              <Dashboard />
            </LayoutApp>
          </Route>

          <Route path='/taikhoan'>
            <LayoutApp>
              <TaiKhoan />
            </LayoutApp>
          </Route>

          <Route path='/taikhoanthanhtoan'>
            <LayoutApp>
              <TaiKhoanThanhToan />
            </LayoutApp>
          </Route>

          <Redirect to='/dashboard' />
        </Switch>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/login' />

          <Route path='/login'>
            as
          </Route>

          <Redirect to='/login' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default inject('store')(observer(Routes))
