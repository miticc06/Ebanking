
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Button, Row, Col } from 'antd'
import './style.less'

function ThanhToan (props) {
  useEffect(() => {
    props.store.appBar.setTitle('TIỆN ÍCH THANH TOÁN')
  }, [props.store.appBar])

  const list = [
    {
      header: 'Hoá đơn sinh hoạt',
      list: [
        { name: 'HOÁ ĐƠN TIỀN ĐIỆN', path: '/hoadondien', buttonTitle: 'Thanh toán', buttonIcon: 'swap' },
        { name: 'HOÁ ĐƠN TIỀN NƯỚC', path: '/hoadondien', buttonTitle: 'Thanh toán', buttonIcon: 'swap' }
      ]
    },
    {
      header: 'Điện thoại trả trước',
      list: [
        { name: 'NẠP TIỀN ĐIỆN THOẠI', path: '/naptiendienthoai', buttonTitle: 'Tiếp tục', buttonIcon: 'arrow-right' },
        { name: 'MUA MÃ THẺ DI ĐỘNG', path: '/muamathedidong', buttonTitle: 'Tiếp tục', buttonIcon: 'arrow-right' }
      ]
    }
  ]
  return (
    <div className='thanh-toan'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            TIỆN ÍCH THANH TOÁN
          </div>
        </div>
      </div>
      <List
        itemLayout='horizontal'
        dataSource={list}
        renderItem={item => (
          <div>
            <Row>
              <Col
                xs={{ span: 24 }}
                md={{ span: 12, offset: 6 }}
              >
                <List
                  header={<div className='header-list'>{item.header}</div>}
                  className='list-tai-khoan'
                  itemLayout='horizontal'
                  dataSource={item.list}
                  renderItem={subItem => (
                    <div
                      className='list-item'
                      onClick={() => {
                        props.history.push(`${subItem.path}`)
                      }}
                    >
                      <div className='left'>
                        <div className='ten-tien-ich'>{subItem.name}</div>
                      </div>
                      <div className='right'>
                        <div className='btn-chuyen-tien'>
                          <Button
                            shape='circle'
                            icon={subItem.buttonIcon}
                            size='large'
                          />
                          <div className='btn-title'>{subItem.buttonTitle}</div>
                        </div>
                      </div>
                    </div>
                  )}
                />
              </Col>
            </Row>
          </div>
        )}
      />
    </div>
  )
}
export default withRouter(inject('store')(observer(ThanhToan)))