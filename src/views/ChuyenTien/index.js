
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Icon, Input, Radio } from 'antd'
import './style.less'

const { Option } = Select

function ChuyenTien (props) {
  const [soTien, setSoTien] = useState('')
  const [doiTuongChiuPhi, setDoiTuongChiuPhi] = useState(1)
  const [noiDung, setNoiDung] = useState('')

  useEffect(() => {
    props.store.appBar.setTitle('CHUYỂN TIỀN')
  }, [props.store.appBar])

  return (
    <div className='chuyen-khoan'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            Giao dịch chuyển khoản
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
                <div className='label'>Tài khoản</div>
                <div className='item'>
                  <Select
                    defaultValue='tk1'
                    className='item-select'
                  >
                    <Option value='tk1'>
                      <div className='so-tai-khoan'>TK-7291.00000.80137</div>
                      <div className='so-du'>4,314,122 VND</div>
                    </Option>

                    <Option value='tk2'>
                      <div className='so-tai-khoan'>TK-6569.24635.98720</div>
                      <div className='so-du'>19,200,000 VND</div>
                    </Option>
                  </Select>
                </div>
              </div>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Phạm vi chuyển tiền</div>
                <div className='item'>
                  <Select
                    defaultValue='tk1'
                    className='item-select'
                  >
                    <Option value='tk1'>
                      <div className='pham-vi-chuyen-tien'>Chuyển tiền nội bộ TTL Bank</div>
                    </Option>

                    <Option value='tk2'>
                      <div className='pham-vi-chuyen-tien'>Chuyển tiền liên ngân hàng</div>
                    </Option>
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
                <div className='label'>Tài khoản thụ hưởng</div>
                <div className='item'>
                  <div className='tai-khoan-thu-huong'>
                    <div className='left'>
                      <div className='title-chon-tai-khoan-thu-huong'>
                        Chọn tài người thụ hưởng
                      </div>
                    </div>
                    {/* <div className='right'> */}
                    <Icon className='icon-right' type='right' />
                    {/* </div> */}

                  </div>

                </div>
              </div>
            </Col>

            <Col
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Số tiền</div>
                <div className='item'>
                  <Input
                    className='input-so-tien'
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
          </Row>


          <Row>
            <Col
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Đối tượng chịu phí</div>
                <div className='item'>
                  <Radio.Group
                    className='group-radio-doi-tuong-chiu-phi'
                    onChange={(e) => {
                      setDoiTuongChiuPhi(e.target.value)
                    }}
                    value={doiTuongChiuPhi}
                  >
                    <Radio value={1}>Người chuyển</Radio>
                    <Radio value={2}>Người nhận</Radio>
                  </Radio.Group>

                </div>
              </div>
            </Col>

          </Row>


          <Row>
            <Col
              xs={24}
              md={24}
            >
              <div className='group-item'>
                <div className='label'>Nội dung</div>
                <div className='item'>
                  <Input
                    className='input-noi-dung'
                    value={noiDung}
                    onChange={(e) => {
                      setNoiDung(e.target.value)
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>


        </Col>

      </Row>


    </div>
  )
}
export default withRouter(inject('store')(observer(ChuyenTien)))