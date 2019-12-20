
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Button, Row, Col, Avatar } from 'antd'
import './style.less'

function TaiKhoan (props) {
  useEffect(() => {
    props.store.appBar.setTitle('TÀI KHOẢN')
  }, [props.store.appBar])

  const list = [
    {
      soTaiKhoan: '31410003194990',
      soDu: '135,103'
    },
    {
      soTaiKhoan: '65692463598720',
      soDu: '19,200,000'
    }
  ]
  return (
    <div className='tai-khoan'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            DANH SÁCH TÀI KHOẢN
          </div>
        </div>
      </div>
      <Row>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12, offset: 6 }}
        >
          <List
            header={<div className='header-list'>Tài khoản thanh toán</div>}
            className='list-tai-khoan'
            itemLayout='horizontal'
            dataSource={list}
            renderItem={item => (
              <div
                className='list-item'
                onClick={() => {
                  // console.log('Click')
                  props.history.push('/taikhoanthanhtoan')
                }}
              >
                <div className='left'>
                  <div className='so-tai-khoan'>{item.soTaiKhoan}</div>
                  <div className='so-du'>{`Số dư khả dụng: ${item.soDu} VND`}</div>
                </div>
                <div className='right'>
                  <div className='btn-chuyen-tien'>
                    <Button
                      shape='circle'
                      icon='swap'
                      size='large'
                    />
                    <div>Chuyển tiền</div>
                  </div>
                </div>
              </div>
            )}
          />
        </Col>

      </Row>


    </div>
  )
}
export default withRouter(inject('store')(observer(TaiKhoan)))