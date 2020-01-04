
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Button, Modal } from 'antd'
import './style.less'

const { confirm } = Modal

function TaiKhoan (props) {
  useEffect(() => {
    props.store.appBar.setTitle('TÀI KHOẢN')
  }, [props.store.appBar])

  const list = [
    {
      soTaiKhoan: '31410003194990',
      soDu: '135,103'
    },
    {
      soTaiKhoan: '65692463598720',
      soDu: '19,200,000'
    }
  ]
  return (
    <div className='tai-khoan'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            DANH SÁCH TÀI KHOẢN
          </div>
        </div>
      </div>
      <div className='main-column'>
        <List
          header={<div className='header-list'>Tài khoản thanh toán</div>}
          className='list-tai-khoan'
          itemLayout='horizontal'
          dataSource={list}
          renderItem={item => (
            <div
              className='list-item'
              onClick={() => {
                // console.log('Click')
                props.history.push('/taikhoanthanhtoan')
              }}
            >
              <div className='left'>
                <div className='so-tai-khoan'>{item.soTaiKhoan}</div>
                <div className='so-du'>{`Số dư khả dụng: ${item.soDu} VND`}</div>
              </div>
              <div className='right'>
                <div
                  className='btn-chuyen-tien'
                  onClick={(e) => {
                    e.persist()
                    e.preventDefault()
                    e.stopPropagation()
                    props.history.push('/chuyentien')
                  }}
                >
                  <Button
                    shape='circle'
                    icon='swap'
                    size='large'
                  />
                  <div>Chuyển tiền</div>
                </div>
              </div>
            </div>
          )}
        />

        <List
          header={<div className='header-list'>Tài khoản tiết kiệm</div>}
          className='list-tai-khoan'
          itemLayout='horizontal'
          dataSource={[{}]}
          renderItem={item => (
            <div
              className='list-item'
              onClick={() => {
                props.history.push('/thongtintaikhoan')
              }}
              style={{ height: '120px' }}

            >
              <div
                className='left'
              >
                <div className='so-tai-khoan'>65692463598720</div>
                <div className='so-du'>{`Số dư gốc khả dụng: 5,000,000 VND`}</div>
                <div className='so-du'>Ngày đáo hạn: 01/01/2020</div>
              </div>

              <div className='right'>
                <div
                  className='btn-chuyen-tien'
                  onClick={(e) => {
                    e.persist()
                    e.preventDefault()
                    e.stopPropagation()

                    confirm({
                      centered: true,
                      title: 'Thông báo',
                      content: 'Bạn có chắc chắn muốn rút tiền gửi?',
                      onOk () {
                        console.log('OK')
                      },
                      onCancel () {
                        console.log('Cancel')
                      }
                    })
                  }}
                >
                  <Button
                    shape='circle'
                    icon='retweet'
                    size='large'
                  />
                  <div>Rút tiền gửi</div>
                </div>
              </div>

            </div>
          )}
        />
      </div>
    </div>
  )
}
export default withRouter(inject('store')(observer(TaiKhoan)))