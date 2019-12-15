
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Icon, Input, Radio, Button } from 'antd'
import ModalConfirmSms from './ModalConfirmSms'
import ModalThuHuongGanDay from './ModalThuHuongGanDay'
import ModalTaiKhoanThuHuong from './ModalTaiKhoanThuHuong'
import ModalSoTheThuHuong from './ModalSoTheThuHuong'
import './style.less'

const { Option } = Select
const { TextArea } = Input

function ChuyenTien (props) {
  const [soTien, setSoTien] = useState('')
  const [doiTuongChiuPhi, setDoiTuongChiuPhi] = useState(1)
  const [noiDung, setNoiDung] = useState('')
  const [waitConfirm, setWaitConFirm] = useState(false)
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [thuHuongValue, setThuHuongValue] = useState('')
  const [loaiThuHuong, setLoaiThuHuong] = useState('')
  const [visibleThuHuongGanDay, setVisibleThuHuongGanDay] = useState(false)
  const [visibleTaiKhoanThuHuong, setVisibleTaiKhoanThuHuong] = useState(false)
  const [visibleSoTheThuHuong, setVisibleSoTheThuHuong] = useState(false)
  const [visibleSoCMNDPassport, setVisibleSoCMNDPassport] = useState(false)

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
                    disabled={waitConfirm}
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
                    disabled={waitConfirm}
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
                <div className='label'>Tài khoản/người thụ hưởng</div>
                <div className='item'>
                  <Select
                    disabled={waitConfirm}
                    className='item-select'
                    onChange={() => setThuHuongValue('')}
                    onSelect={(value) => {
                      setLoaiThuHuong(value)
                      if (value === 'ThuHuongGanDay') setVisibleThuHuongGanDay(true)
                      else if (value === 'TaiKhoanThuHuong') setVisibleTaiKhoanThuHuong(true)
                      else if (value === 'SoTheThuHuong') setVisibleSoTheThuHuong(true)
                      else if (value === 'SoCMNDPassport') setVisibleSoCMNDPassport(true)
                    }}
                  >
                    <Option value='ThuHuongGanDay'>
                      <div className='loai-thu-huong'>Tài khoản thụ hưởng gần đây</div>
                      {loaiThuHuong === 'ThuHuongGanDay' ? (
                        <div className='so-du'>{thuHuongValue}</div>
                      ) : ''}
                    </Option>

                    <Option value='TaiKhoanThuHuong'>
                      <div className='loai-thu-huong'>Đến tài khoản ngân hàng</div>
                      {loaiThuHuong === 'TaiKhoanThuHuong' ? (
                        <div className='so-du'>{thuHuongValue}</div>
                      ) : ''}
                    </Option>

                    <Option value='SoTheThuHuong'>
                      <div className='loai-thu-huong'>Đến số thẻ ngân hàng</div>
                      {loaiThuHuong === 'SoTheThuHuong' ? (
                        <div className='so-du'>{thuHuongValue}</div>
                      ) : ''}
                    </Option>

                    <Option value='SoCMNDPassport'>
                      <div className='loai-thu-huong'>Đến số CMND/Passport</div>
                      {loaiThuHuong === 'SoCMNDPassport' ? (
                        <div className='so-du'>{thuHuongValue}</div>
                      ) : ''}
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
                <div className='label'>Đối tượng chịu phí</div>
                <div className='item'>
                  <Radio.Group
                    disabled={waitConfirm}
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
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Số tiền</div>
                <div className='item'>
                  <Input
                    disabled={waitConfirm}
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
            {soTien ? (
              <Col
                xs={24}
                md={12}
              >
                <div
                  className='group-item'
                  style={{ margin: '20px 0px' }}
                >
                  <div>Phí dịch vụ: 11.000 VNĐ</div>
                  <div>
                    Tổng thành tiền:
                    {` ${(parseInt(soTien, 10) + 11000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ`}
                  </div>
                </div>

              </Col>
            ) : ''}


          </Row>


          <Row>
            <Col
              xs={24}
              md={24}
            >
              <div className='group-item noi-dung-tin-nhan'>
                <div className='label'>
                  Nội dung
                  <div className='count'>
                    {`${noiDung.length}/170`}
                  </div>
                </div>
                <div className='item'>
                  <TextArea
                    disabled={waitConfirm}
                    maxLength={170}
                    rows={2}
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

          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button
              loading={confirmLoading}
              onClick={() => {
                setWaitConFirm(true)
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
        hideModal={() => {
          setVisibleConfirm(false)
          setWaitConFirm(false)
        }}
      />

      <ModalThuHuongGanDay 
        visible={visibleThuHuongGanDay}
        setThuHuongValue={setThuHuongValue}
        hideModal={() => {
          setVisibleThuHuongGanDay(false)
        }}
      />

      <ModalTaiKhoanThuHuong 
        visible={visibleTaiKhoanThuHuong}
        setThuHuongValue={setThuHuongValue}
        hideModal={() => {
          setVisibleTaiKhoanThuHuong(false)
        }}
      />

      <ModalSoTheThuHuong
        visible={visibleSoTheThuHuong}
        setThuHuongValue={setThuHuongValue}
        hideModal={() => {
          setVisibleSoTheThuHuong(false)
        }}
      />

    </div>
  )
}
export default withRouter(inject('store')(observer(ChuyenTien)))