
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Button, Row, Col, Avatar } from 'antd'
import './style.less'
import the1 from'../../image/the1.png'

function QuanLiThe (props) {
  useEffect(() => {
    props.store.appBar.setTitle('DỊCH VỤ THẺ')
  }, [props.store.appBar])

  const list = [
    {
      soThe: '31410003194990',
      image: the1,
      chuThe: 'Dang Minh Tien',
      loaiThe: 'ATM nội địa',
      trangThai: 1
    },
    {
      soThe: '31410003194990',
      image: the1,
      chuThe: 'Dang Minh Tien',
      loaiThe: 'ATM nội địa',
      trangThai: 1
    },
  ]
  return (
    <div className='the'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            DANH SÁCH THẺ
          </div>
        </div>
      </div>
      {/* <Row>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12, offset: 6 }}
        > */}
          <div className='main-column'>
            <List
              // header={<div className='header-list'>Tài khoản thanh toán</div>}
              className='list-the'
              itemLayout='horizontal'
              dataSource={list}
              renderItem={item => (
                <div
                  className='list-item'
                  onClick={() => {
                    props.history.push('/chitietthe')
                  }}
                >
                  <div className='left'>
                    <img className='img-the' src={item.image} />                
                  </div>
                  
                  <div className='right'>
                    <div className='group-info'>
                        <div className='label'>Số thẻ</div>
                        <div className='content'>{item.soThe}</div>
                    </div>
                    <div className='group-info'>
                      <div className='label'>Chủ thẻ</div>
                      <div className='content'>{item.chuThe}</div>
                    </div>
                    <div className='group-info'>
                      <div className='label'>Loại thẻ</div>
                      <div className='content'>{item.loaiThe}</div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        {/* </Col>

      </Row> */}


    </div>
  )
}
export default withRouter(inject('store')(observer(QuanLiThe)))