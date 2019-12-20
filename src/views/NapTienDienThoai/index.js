import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Checkbox, Input, Button } from 'antd'
import ModalConfirmSms from './ModalConfirmSms'
import './style.less'

const { Option } = Select

function NapTienDienThoai (props) {
  const [waitConfirm, setWaitConfirm] = useState(false)
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [confirmSuccess, setConfirmSuccess] = useState(false)
  const [phoneNumberSelectedIndex, setPhoneNumberSelectedIndex] = useState('')
  const [inputNewPhoneNumber, setInputNewPhoneNumber] = useState(false)
  const [soTien, setSoTien] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  
  useEffect(() => {
    props.store.appBar.setTitle('NẠP TIỀN ĐIỆN THOẠI')
  }, [props.store.appBar]) 

  const accountsData = [
    { key: 'tk1', soTaiKhoan: 'TK-7291.00000.80137', soDu: '4,314,122 VND' },
    { key: 'tk2', soTaiKhoan: 'TK-6569.24635.98720', soDu: '19,200,000 VND' }
  ]

  const phoneBookData = [
    { key: 'user1', soDienThoai: '01213214371', ten: 'Bạn Luân - PMCL2' },
    { key: 'user2', soDienThoai: '0905403101', ten: 'Bạn Tiến - PMCL3' },
    { key: 'user3', soDienThoai: '0386744772', ten: 'Bạn Tùng - PMCL3' },
    { key: 'user4', soDienThoai: '0906xxxxxx', ten: 'Crush' },
    { key: 'user5', soDienThoai: '0123456789', ten: 'BABA' },
    { key: 'user6', soDienThoai: '0987654321', ten: 'MAMA' }
  ]

  const handleChecked = (e) => {
    setInputNewPhoneNumber(e.target.checked)

    if (e.target.checked === true) {
      setPhoneNumberSelectedIndex('')
    }
  }

  return (
    <div className='nap-tien-dien-thoai'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            NẠP TIỀN ĐIỆN THOẠI
          </div>
        </div>
      </div>
      <Row>
        <Col 
          xs={{ span: 24 }} 
          md={{ span: 12, offset: 6 }}
          className='content'
        >
          <Row>
            <Col 
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Tài khoản trích tiền</div>
                <div className='item'>
                  <Select
                    disabled={waitConfirm}
                    className='item-select'
                  >
                    {accountsData.map(account => (
                      <Option value={account.key}>
                        <div className='main-info'>{account.soTaiKhoan}</div>
                        <div className='sub-info'>{account.soDu}</div>
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </Col>
          </Row>
        
          <Row>
            <Col 
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Chọn từ danh bạ</div>
                <div className='item'>
                  <Select
                    disabled={inputNewPhoneNumber || waitConfirm}
                    className='item-select'
                    value={phoneNumberSelectedIndex}
                    onSelect={(e) => setPhoneNumberSelectedIndex(e)}
                  >
                    {phoneBookData.map(user => (
                      <Option value={user.key}>
                        <div className='main-info'>{user.soDienThoai}</div>
                        <div className='sub-info'>{user.ten}</div>
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </Col>

            <Col 
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='group-label'>
                  <Checkbox onChange={(e) => handleChecked(e)} />
                  <div className='label' style={{ marginLeft: 10 }}> Số điện thoại mới </div>
                </div>
                <div className='item'>
                  <Input
                    disabled={!inputNewPhoneNumber || waitConfirm}
                    className='input-phone-number'
                    value={newPhoneNumber}
                    prefix='+84'
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '')
                      setNewPhoneNumber(value)
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Số tiền</div>
                <div className='item'>
                  <Input
                    disabled={waitConfirm}
                    className='input-money'
                    suffix='VND'
                    value={soTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    onChange={(e) => {
                      const value = e.target.value.replace(/,/g, '')
                      if (/^[0-9]*$/g.test(value)) {
                        setSoTien(value)
                      }
                    }}
                  />
                </div>
              </div>

            </Col>
            {soTien ? (
              <Col
                xs={24}
                md={12}
              >
                <div
                  className='group-item'
                  style={{ margin: '20px 0px' }}
                >
                  <div>Phí dịch vụ: 5.000 VNĐ</div>
                  <div>
                    Tổng thành tiền:
                    {` ${(parseInt(soTien, 10) + 5000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND`}
                  </div>
                </div>

              </Col>
            ) : ''}
          </Row>
          
          <div className='button-tiep-tuc'>
            <Button
              loading={confirmLoading}
              onClick={() => {
                setWaitConfirm(true)
                setConfirmLoading(true)
                setTimeout(() => {
                  setConfirmLoading(false)
                  setVisibleConfirm(true)
                }, 1000)
              }}
              type='primary'
            >
              Tiếp tục
            </Button>
          </div>

        </Col>
      </Row>

      <ModalConfirmSms
        visible={visibleConfirm}
        setConfirmSuccess={setConfirmSuccess}
        hideModal={() => {
          setVisibleConfirm(false)
          setWaitConfirm(false)
        }}
      />

      { confirmSuccess ? props.history.push({
          pathname: '/ketquagiaodich', 
          state: {
            typeTransfer: 'nap-tien'
          }
        }) : null }
    </div>
  )
}
export default withRouter(inject('store')(observer(NapTienDienThoai)))
