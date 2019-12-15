import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Row, Col, Icon, Button, List } from 'antd'
import './style.less'

function KetQuaGiaoDich (props) {
  const type = props.location.state.typeTransfer

  const state = 'success' // 'fail'

  const thongBaoLoi = 'Đây là thông báo lỗi :('
  const maGiaoDich = 'MGD-TLT20191215-1234564654'

  const chuyenTien = [
    { label: 'Tài khoản trích tiền', value: '314100003194900' },
    { label: 'Tài khoản thụ hưởng', value: '65234782459331' },
    { label: 'Tên người thụ hưởng', value: 'NGUYEN THANH LUAN' },
    { label: 'Chi nhánh', value: 'TLT Bank Chi nhánh Hà Đông' },
    { label: 'Loại tiền', value: 'VND' },
    { label: 'Số tiền', value: '200,000' },
    { label: 'Nội dung', value: 'CHUYEN TIEN MUA LAPTOP' }
  ]

  const thanhToan = [
    { label: 'Tài khoản trích tiền', value: '314100003194900' },
    { label: 'Tài khoản thụ hưởng', value: '65234782459331' },
    { label: 'Tên người thụ hưởng', value: 'CÔNG TY CỔ PHẦN ĐIỆN LỰC EVN MIỀN TRUNG' },
    { label: 'Loại tiền', value: 'VND' },
    { label: 'Số tiền', value: '200,000' },
    { label: 'Nội dung', value: 'THANH TOAN HOA DON DIEN - HD123456789' }
  ]

  const napTien = [
    { label: 'Tài khoản trích tiền', value: '314100003194900' },
    { label: 'Loại tiền', value: 'VND' },
    { label: 'Số tiền', value: '200,000' },
    { label: 'Nội dung', value: 'NAP TIEN DIEN THOAI - 01223214371' }
  ]

  const muaThe = [
    { label: 'Tài khoản trích tiền', value: '314100003194900' },
    { label: 'Loại tiền', value: 'VND' },
    { label: 'Số tiền', value: '200,000' },
    { label: 'Nội dung', value: 'MUA MA THE DIEN THOAI - MOBIFONE' }
  ]

  const thongTinThe = {
    mathe: '1234 5678 9012 3456',
    seri: '313131313131313131'
  }

  useEffect(() => {
    props.store.appBar.setTitle('KẾT QUẢ GIAO DỊCH')
  }, [props.store.appBar])

  return (
    <div className='ket-qua'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            KẾT QUẢ GIAO DỊCH
          </div>
        </div>
      </div>
      <Row>
        <Col 
          xs={{ span: 24 }} 
          md={{ span: 12, offset: 6 }}
          className='content'
        >
          {state === 'success' && (
          <div>
            <div className='infoHeader'>
              <div className='icon'><Icon className='icon-success' type='check-circle' /></div> 
              <div className='title'>GIAO DỊCH THÀNH CÔNG</div>
            </div>
            <div className='infoHeader'>
              <div className='ma-giao-dich'>{`Mã giao dịch: ${maGiaoDich}`}</div>
            </div>
            
            <List 
              itemLayout='horizontal'
              dataSource={
                type === 'chuyen-tien' ? chuyenTien : (
                  type === 'thanh-toan' ? thanhToan : (
                    type === 'nap-tien' ? napTien : muaThe
                  )
                )
              }
              renderItem={item => (
                <div className='group-item'>
                  <div className='item-left'>{item.label}</div>
                  <div className='item-right'>{item.value}</div>
                </div>
              )}
            />

            { type === 'mua-the' ? (
              <div>
                <div className='thong-tin-the'>Thông tin thẻ điện thoại</div>
                <div className='group-item'>
                  <div className='item-left'>Mã thẻ cào</div>
                  <div className='item-right'>
                    {thongTinThe.mathe}
                    <Button
                      icon='copy'
                      style={{ marginLeft: '10px', color: '#1885EA', border: 'none', fontSize: 16 }}
                    />  
                  </div>
                </div>
                <div className='group-item'>
                  <div className='item-left'>Số seri</div>
                  <div className='item-right'>
                    {thongTinThe.seri}
                    <Button
                      icon='copy'
                      style={{ marginLeft: '10px', color: '#1885EA', border: 'none', fontSize: 16 }}
                    />  
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          )}
          
          {state === 'fail' && (
            <div>
              <div className='infoHeader'>
                <div className='icon'><Icon className='icon-fail' type='close-circle' /></div> 
                <div className='title'>GIAO DỊCH THẤT BẠI</div>
              </div>
              <div className='infoHeader'>
                <div className='ma-giao-dich'>{`${thongBaoLoi}`}</div>
              </div>
            </div>
          )}

          <div className='footer'>
            <Button
              onClick={() => {
                props.history.push('/dashboard')
              }}
              type='primary'
              size='large'
              style={{ width: 200 }}
            >
              Hoàn tất
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(inject('store')(observer(KetQuaGiaoDich)))