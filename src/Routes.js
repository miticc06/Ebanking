/* eslint-disable linebreak-style */
import React from 'react'
import { inject, observer } from 'mobx-react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import TaiKhoan from 'views/TaiKhoan'
import Dashboard from 'views/dashboard'
import TaiKhoanThanhToan from 'views/TaiKhoanThanhToan'
import ChiTietUuDai from 'views/ChiTietUuDai'
import ChuyenTien from 'views/ChuyenTien'
import KetQuaGiaoDich from 'views/KetQuaGiaoDich'
import ThanhToan from 'views/ThanhToan'
import ThanhToanHoaDonDien from 'views/ThanhToanHoaDonDien'
import NapTienDienThoai from 'views/NapTienDienThoai'
import MuaMaThe from 'views/MuaMaThe'
import ThongTinTaiKhoan from 'views/ThongTinTaiKhoan'
import UuDai from 'views/UuDai'
import LayoutApp from './views/layout'


const Routes = props => {
  const {
    store: { authentication }
  } = props

  if (authentication.isLogin) {
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

          <Route path='/chitietuudai'>
            <LayoutApp>
              <ChiTietUuDai />
            </LayoutApp>
          </Route>

          <Route path='/chuyentien'>
            <LayoutApp>
              <ChuyenTien />
            </LayoutApp>
          </Route>

          <Route path='/ketquagiaodich'>
            <LayoutApp>
              <KetQuaGiaoDich />
            </LayoutApp>
          </Route>
          
          <Route path='/thanhtoan'>
            <LayoutApp>
              <ThanhToan />
            </LayoutApp>
          </Route>

          <Route path='/hoadondien'>
            <LayoutApp>
              <ThanhToanHoaDonDien />
            </LayoutApp>
          </Route>

          <Route path='/naptiendienthoai'>
            <LayoutApp>
              <NapTienDienThoai />
            </LayoutApp>
          </Route>

          <Route path='/muamathedidong'>
            <LayoutApp>
              <MuaMaThe />
            </LayoutApp>
          </Route>

          <Route path='/uudai'>
            <LayoutApp>
              <UuDai />
            </LayoutApp>
          </Route>

          <Route path='/thongtintaikhoan'>
            <LayoutApp>
              <ThongTinTaiKhoan />
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
