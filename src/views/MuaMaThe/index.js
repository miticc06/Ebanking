import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Button } from 'antd'
import ModalConfirmSms from './ModalConfirmSms'
import './style.less'

const { Option } = Select

function MuaMaThe (props) {
  const [waitConfirm, setWaitConfirm] = useState(false)
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [confirmSuccess, setConfirmSuccess] = useState(false)
  const [soTien, setSoTien] = useState('')

  useEffect(() => {
    props.store.appBar.setTitle('MUA MÃ THẺ DI ĐỘNG')
  }, [props.store.appBar])

  const accountsData = [
    { key: 'tk1', soTaiKhoan: 'TK-7291.00000.80137', soDu: '4,314,122 VND' },
    { key: 'tk2', soTaiKhoan: 'TK-6569.24635.98720', soDu: '19,200,000 VND' }
  ]

  const networksData = [
    { key: 'n1', nhaMang: 'MOBIFONE' },
    { key: 'n2', nhaMang: 'VINAPHONE' },
    { key: 'n3', nhaMang: 'VIETTEL' },
    { key: 'n4', nhaMang: 'VIETNAMOBILE' },
    { key: 'n5', nhaMang: 'BIGO LIVE :)' }
  ]

  const menhGiaTheData = [
    { key: '10000', label: '10,000 VND' },
    { key: '20000', label: '20,000 VND' },
    { key: '30000', label: '30,000 VND' },
    { key: '50000', label: '50,000 VND' },
    { key: '100000', label: '100,000 VND' },
    { key: '200000', label: '200,000 VND' },
    { key: '300000', label: '300,000 VND' },
    { key: '500000', label: '500,000 VND' }
  ]

  return (
    <div className='mua-ma-the'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            MUA MÃ THẺ DI ĐỘNG
          </div>
        </div>
      </div>
      <div
        className='main-column content'
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
              <div className='label'>Nhà mạng</div>
              <div className='item'>
                <Select
                  disabled={waitConfirm}
                  className='item-select'
                >
                  {networksData.map(network => (
                    <Option value={network.key}>
                      <div className='just-single-info'>{network.nhaMang}</div>
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
              <div className='label'>Mệnh giá thẻ</div>
              <div className='item'>
                <Select
                  disabled={waitConfirm}
                  className='item-select'
                  onSelect={(e) => setSoTien(e)}
                >
                  {menhGiaTheData.map(menhgia => (
                    <Option value={menhgia.key}>
                      <div className='just-single-info'>{menhgia.label}</div>
                    </Option>
                  ))}
                </Select>
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
                <div>Phí dịch vụ: 1.000 VND</div>
                <div>
                  Tổng thành tiền:
                  {` ${(parseInt(soTien, 10) + 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND`}
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

      </div>

      <ModalConfirmSms
        visible={visibleConfirm}
        setConfirmSuccess={setConfirmSuccess}
        hideModal={() => {
          setVisibleConfirm(false)
          setWaitConfirm(false)
        }}
      />

      {confirmSuccess ? props.history.push({
        pathname: '/ketquagiaodich',
        state: {
          typeTransfer: 'mua-the'
        }
      }) : null}
    </div>
  )
}
export default withRouter(inject('store')(observer(MuaMaThe)))
