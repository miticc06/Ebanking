
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Button, Row, Col, Avatar, Select } from 'antd'
import './style.less'

const { Option } = Select

function ChuyenTien (props) {
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
        >
          <div className='group-item'>
            <div className='label'>Tài khoản</div>
            <div className='item'>
              <Select
                defaultValue='tk1'
                className='item-select'
              // style={{ width: 390, height: 50 }}
              >
                <Option value='tk1'>
                  <div className='so-tai-khoan'>TK-7291.00000.80137</div>
                  <div className='so-du'>4,314,122 VND</div>
                </Option>

                <Option value='tk2'>
                  <div className='so-tai-khoan'>TK-6569.24635.98720</div>
                  <div className='so-du'>19,200,000 VND</div>
                </Option>
                <Option value='disabled' disabled>
                  Disabled
                </Option>
                <Option value='Yiminghe'>yiminghe</Option>
              </Select>
            </div>

          </div>

        </Col>

      </Row>


    </div>
  )
}
export default withRouter(inject('store')(observer(ChuyenTien)))