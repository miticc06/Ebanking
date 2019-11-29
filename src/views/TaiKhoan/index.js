
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
          <Avatar size={64} icon='user' />
          <div className='message'>
            Xin chào,
            <div className='fullname'>DANG MINH TIEN</div>
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
              <div className='list-item'>
                <div className='left'>
                  <div className='so-tai-khoan'>{item.soTaiKhoan}</div>
                  <div className='so-du'>{`Số dư khả dụng: ${item.soDu} VND`}</div>
                </div>
                <div className='right'>
                  <div className='btn-chuyen-tien'>
                    <Button shape='circle' icon='swap' size='large' />
                    <div>Chuyển tiền</div>
                  </div>
                </div>
              </div>

              // <List.Item
              //   className='list-item'
              //   actions={[
              //     <div>
              //       <Icon type='swap' />
              //     </div>,
              //     <a key='list-loadmore-more'>more</a>
              //   ]}
              // >
              //   {item.soTaiKhoan}
              //   {item.soDu}
              // </List.Item>
            )}
          />
        </Col>
      </Row>


    </div>
  )
}
export default withRouter(inject('store')(observer(TaiKhoan)))