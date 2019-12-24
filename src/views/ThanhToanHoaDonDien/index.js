import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Checkbox, Input, Button, List } from 'antd'
import ModalConfirmSms from './ModalConfirmSms'
import './style.less'

const { Option } = Select
const { Search } = Input

function ThanhToanHoaDonDien (props) {
  const [waitConfirm, setWaitConfirm] = useState(false)
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [confirmSuccess, setConfirmSuccess] = useState(false)
  const [inputNewCustomer, setInputNewCustomer] = useState(false)
  const [showSearchResult, setShowSearchResult] = useState(false)
  const [waitOnSelectBox, setWaitOnSelectBox] = useState(false)
  const [waitOnSearchBox, setWaitOnSearchBox] = useState(false)
  const [tenKhachHang, setTenKhachHang] = useState('')
  const [maKhachHang, setMaKhachHang] = useState('')
  const [tongTien, setTongTien] = useState('0')
  const [phiDichVu, setPhiDichVu] = useState('0')
  const [khachHangSelectedValue, setKhachHangSelectedValue] = useState('')

  useEffect(() => {
    props.store.appBar.setTitle('HOÁ ĐƠN TIỀN ĐIỆN')
  }, [props.store.appBar])

  const accountsData = [
    { key: 'tk1', soTaiKhoan: 'TK-7291.00000.80137', soDu: '4,314,122 VND' },
    { key: 'tk2', soTaiKhoan: 'TK-6569.24635.98720', soDu: '19,200,000 VND' }
  ]

  const suppliersData = [
    { key: 'ncc1', tenNhaCungCap: 'EVN Miền Bắc' },
    { key: 'ncc2', tenNhaCungCap: 'EVN Miền Trung' },
    { key: 'ncc3', tenNhaCungCap: 'ENV Miền Nam' },
    { key: 'ncc4', tenNhaCungCap: 'Nhà của anh Luân đệp trai' }
  ]

  const savedCustomersData = [
    { key: 'kh1', maKhachHang: 'KH0123456789', tenKhachHang: 'Đặng Minh Tiến' },
    { key: 'kh2', maKhachHang: 'KH9876543210', tenKhachHang: 'Nguyễn Bá Tùng' },
    { key: 'kh3', maKhachHang: 'KH1112223334', tenKhachHang: 'Nguyễn Thành Luân' }
  ]

  const newCustomerData = { maKhachHang: 'KH000000XXX', tenKhachHang: 'Nguyễn Văn XXX' }

  const billsData = [
    { name: 'HOA DON TIEN DIEN THANG 10/2019', maHoaDon: 'HD00000001', soTien: '123,456' },
    { name: 'HOA DON TIEN DIEN THANG 11/2019', maHoaDon: 'HD00000002', soTien: '456,789' }
  ]

  const handleSelect = (e) => {
    setKhachHangSelectedValue(e)

    let customer = savedCustomersData.find(i => i.key === `${e}`)
    setTenKhachHang(customer.tenKhachHang)
    setMaKhachHang(customer.maKhachHang)

    setShowSearchResult(false)
    setWaitOnSelectBox(true)

    setTimeout(() => {
      setShowSearchResult(true)
      setWaitOnSelectBox(false)
    }, 1000)
  }

  const handleSearch = (e) => {
    setShowSearchResult(false)
    setWaitOnSearchBox(true)

    setTenKhachHang(newCustomerData.tenKhachHang)
    setMaKhachHang(newCustomerData.maKhachHang)

    setTimeout(() => {
      setShowSearchResult(true)
      setWaitOnSearchBox(false)
    }, 1000)
  }

  const handleCheckBill = (e, bill) => {
    let calcPhiDichVu = phiDichVu.replace(/,/, '')
    let calcTongTien = tongTien.replace(/,/, '')
    let soTien = bill.soTien.replace(/,/, '')
    let factor = (e.target.checked === true ? 1 : -1)

    calcPhiDichVu = (parseInt(calcPhiDichVu, 10) + 15000 * factor).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    calcTongTien = (parseInt(calcTongTien, 10) + soTien * factor).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    setPhiDichVu(calcPhiDichVu)
    setTongTien(calcTongTien)
  }

  const handleNewCustomerCheck = (e) => {
    // reset tong tien, phi dich vu
    setPhiDichVu('0')
    setTongTien('0')

    setInputNewCustomer(e.target.checked)
    setShowSearchResult(false)

    if (e.target.checked === true) {
      setKhachHangSelectedValue('')
    }
  }

  return (
    <div className='hoa-don-dien'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            HOÁ ĐƠN TIỀN ĐIỆN
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

            <Col 
              xs={24}
              md={12}
            >
              <div className='group-item'>
                <div className='label'>Nhà cung cấp dịch vụ</div>
                <div className='item'>
                  <Select
                    disabled={waitConfirm}
                    className='item-select'
                  >
                    {suppliersData.map(supplier => (
                      <Option value={supplier.key}>
                        <div className='nha-cung-cap-dich-vu'>{supplier.tenNhaCungCap}</div>
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
                <div className='label'>Khách hàng đã lưu</div>
                <div className='item'>
                  <Select
                    disabled={inputNewCustomer || waitConfirm}
                    className='item-select'
                    value={khachHangSelectedValue}
                    loading={waitOnSelectBox}
                    onSelect={(e) => handleSelect(e)}
                  >
                    {savedCustomersData.map(customer => (
                      <Option value={customer.key}>
                        <div className='main-info'>{customer.maKhachHang}</div>
                        <div className='sub-info'>{customer.tenKhachHang}</div>
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
                  <Checkbox onChange={(e) => handleNewCustomerCheck(e)} />
                  <div className='label' style={{ marginLeft: 10 }}> Mã khách hàng mới </div>
                </div>
                <div className='item'>
                  <Search
                    disabled={!inputNewCustomer || waitConfirm}
                    className='input-khach-hang-moi'
                    onSearch={handleSearch}
                    loading={waitOnSearchBox}
                  />
                </div>
              </div>
            </Col>
          </Row>
          
          <hr />

          {showSearchResult ? (
            <Row>
              <Col 
                xs={24}
                md={12}
              >
                <div className='group-item'>
                  <div className='thong-tin-khach-hang'>
                    <div className='label'>Thông tin khách hàng</div>
                    <div className='info'>{`Họ tên: ${tenKhachHang}`}</div>
                    <div className='info'>{`Mã khách hàng: ${maKhachHang}`}</div>
                    
                    {inputNewCustomer ? (
                      <div className='group-luu-khach-hang'>
                        <Checkbox />
                        <div className='luu-khach-hang'>Lưu khách hàng</div>
                      </div>
                    ) : ''}
                    
                  </div>
                </div>
              </Col>

              <Col 
                xs={24}
                md={12}
              >
                <div className='group-item'>
                  <div className='thong-tin-khach-hang'>
                    <div className='label'>Danh sách hoá đơn chưa thanh toán</div>
                    <List 
                      itemLayout='horizontal'
                      dataSource={billsData}
                      renderItem={item => (
                        <div className='group-bill'>
                          <Checkbox onChange={(e) => handleCheckBill(e, item)} />
                          <div className='group-bill-info'>
                            <div className='bill-name'>{`${item.name}`}</div>
                            <div className='bill-code'>{`Mã hoá đơn: ${item.maHoaDon}`}</div>
                            <div className='bill-total-money'>{`Tổng tiền: ${item.soTien} VND`}</div>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </div>

                {parseInt(tongTien, 10) > 0 ? (
                  <div className='group-item'>
                    <div className='thanh-tien'>
                      <div>{`Phí dịch vụ: ${phiDichVu} VND`}</div>
                      <div>{`Tổng thành tiền: ${tongTien} VND`}</div>
                    </div>
                  </div>
                ) : ''}
    
              </Col>
            </Row>
          ) : ''}

          <div className='button-tiep-tuc'>
            <Button
              disabled={!showSearchResult}
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
            typeTransfer: 'thanh-toan'
          }
        }) : null }
    </div>
  )
}
export default withRouter(inject('store')(observer(ThanhToanHoaDonDien)))