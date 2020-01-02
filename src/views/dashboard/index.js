/* eslint-disable linebreak-style */

import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Row, Col, Avatar, Icon } from 'antd'
import './style.less'

function Dashboard (props) {
  useEffect(() => {
    props.store.appBar.setTitle('TRANG CHỦ')
  }, [props.store.appBar])

  // const list = [
  //   {
  //     title: 'Thông tin tài khoản',
  //     description: 'Quản lý thông tin cơ bản và lịch sử giao dịch một cách nhanh chóng và hiệu quả ở mọi lúc mọi nơi',
  //     icon: 'user'
  //   },
  //   {
  //     title: 'Chuyển tiền',
  //     description: 'Thực hiện các giao dịch chuyển tiền đến các tài khoản trong và ngoài TLT Bank một cách an toàn, bảo mật tuyệt đối',
  //     icon: 'swap'
  //   },
  //   {
  //     title: 'Tiện tích thanh toán',
  //     description: 'Thanh toán hoá đơn tiền điện, nước, mã thẻ di động dễ dàng và nhanh chóng hơn bao giờ hết',
  //     icon: 'shopping-cart'
  //   },
  //   {
  //     title: 'Dịch vụ thẻ',
  //     description: 'Quản lý hoạt động của thẻ ngân hàng một cách chủ động và kịp thời',
  //     icon: 'credit-card'
  //   },
  //   {
  //     title: 'Tin tức - Khuyến mãi',
  //     description: 'Cập nhật các chương trình khuyến mãi của ngân hàng một cách nhanh chóng nhất',
  //     icon: 'notification'
  //   }
  // ]

  return (
    <div className='dashboard'>
      <div className='header'>
        <div className='info'>
          <Avatar size={64} icon='user' />
          <div className='message'>
            Xin chào,
            <div className='fullname'>DANG MINH TIEN</div>
          </div>
        </div>
      </div>

      <div className='content'>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 20, offset: 2 }}
          >
            <Row gutter={[48, 48]}>

              <Col span={8}>
                <div className='tinh-nang' onClick={() => props.history.push('/taikhoan')}>
                  <div className='div-icon'>
                    <div className='icon'>
                      <Icon type='idcard' style={{ fontSize: 45 }} />
                    </div>
                  </div>
                  <div className='title'>
                    Thông tin tài khoản
                  </div>
                  <div className='description'>
                    Quản lý thông tin cơ bản và lịch sử giao dịch một cách nhanh chóng và hiệu quả ở mọi lúc mọi nơi
                  </div>
                </div>
              </Col>

              <Col span={8}>
                <div className='tinh-nang' onClick={() => props.history.push('/chuyentien')}>
                  <div className='div-icon'>
                    <div className='icon'>
                      <Icon type='swap' style={{ fontSize: 45 }} />
                    </div>
                  </div>
                  <div className='title'>
                    Chuyển tiền
                  </div>
                  <div className='description'>
                    Thực hiện các giao dịch chuyển tiền đến các tài khoản trong và ngoài TLT Bank một cách an toàn, bảo mật tuyệt đối
                  </div>
                </div>
              </Col>

              <Col span={8}>
                <div className='tinh-nang' onClick={() => props.history.push('/thanhtoan')}>
                  <div className='div-icon'>
                    <div className='icon'>
                      <Icon type='shopping-cart' style={{ fontSize: 45 }} />
                    </div>
                  </div>
                  <div className='title'>
                    Tiện tích thanh toán
                  </div>
                  <div className='description'>
                    Thanh toán hoá đơn tiền điện, nước, mã thẻ di động dễ dàng và nhanh chóng hơn bao giờ hết
                  </div>
                </div>
              </Col>

            </Row>

            <Row gutter={[48, 48]}>

              <Col span={8} offset={4}>
                <div className='tinh-nang' onClick={() => props.history.push('/the')}>
                  <div className='div-icon'>
                    <div className='icon'>
                      <Icon type='credit-card' style={{ fontSize: 45 }} />
                    </div>
                  </div>
                  <div className='title'>
                    Dịch vụ thẻ
                  </div>
                  <div className='description'>
                    Quản lý hoạt động của thẻ ngân hàng một cách chủ động và kịp thời
                  </div>
                </div>
              </Col>

              <Col span={8}>
                <div className='tinh-nang' onClick={() => props.history.push('/uudai')}>
                  <div className='div-icon'>
                    <div className='icon'>
                      <Icon type='sound' style={{ fontSize: 45 }} />
                    </div>
                  </div>
                  <div className='title'>
                    Tin tức - Khuyến mãi
                  </div>
                  <div className='description'>
                    Cập nhật các chương trình khuyến mãi của ngân hàng một cách nhanh chóng nhất
                  </div>
                </div>
              </Col>

            </Row>

          </Col>
        </Row>
      </div>


    </div>
  )
}
export default withRouter(inject('store')(observer(Dashboard)))