import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Row, Col, List } from 'antd'
import './style.less'

function ThongTinTaiKhoan (props) {
  const thongTin = [
    { label: 'Số tài khoản', value: '314100003194900' },
    { label: 'Tên chủ tài khoản', value: 'NGUYEN THANH LUAN' },
    { label: 'Loại tài khoản', value: 'Tài khoản thanh toán' },
    { label: 'Chi nhánh', value: 'TLT Bank Chi nhánh Hà Đông' },
    { label: 'Loại tiền', value: 'VND' },
    { label: 'Số dư hiện tại', value: '19,200,000' },
    { label: 'Số dư khả dụng', value: '19,200,000' },
    { label: 'Trạng thái tài khoản', value: 'Đang hoạt động' }
  ]

  useEffect(() => {
    props.store.appBar.setTitle('THÔNG TIN TÀI KHOẢN')
  }, [props.store.appBar])

  return (
    <div className='thong-tin-tai-khoan'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            THÔNG TIN TÀI KHOẢN
          </div>
        </div>
      </div>
      <Row>
        <Col 
          xs={{ span: 24 }} 
          md={{ span: 12, offset: 6 }}
          className='content'
        >
          <List 
            itemLayout='horizontal'
            dataSource={thongTin}
            renderItem={item => (
              <div className='group-item'>
                <div className='item-left'>{item.label}</div>
                <div className='item-right'>{item.value}</div>
              </div>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(inject('store')(observer(ThongTinTaiKhoan)))