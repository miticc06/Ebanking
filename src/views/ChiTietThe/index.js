/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Radio, Modal, Form } from 'antd'
import './style.less'
import the1 from '../../image/the1.png'
import the2 from '../../image/the2.png'

function ChiTietThe (props) {
  const { form } = props
  useEffect(() => {
    props.store.appBar.setTitle('CHI TIẾT THẺ')
  }, [props.store.appBar])

  const item = {
    soThe: '1234 5678 9876 5432',
    image: the1,
    chuThe: 'Dang Minh Tien',
    loaiThe: 'ATM nội địa',
    trangThai: 'active'
  }

  const listGiaoDich = [
    {
      time: '05/01/2019 12:12:12',
      content: '4262472462462462 - Rút tiền ATM NGTHITHAP',
      money: '-2.000.000',
      type: 'out'
    },
    {
      time: '05/01/2019 10:42:36',
      content: '4262472462462463 - Rút tiền ATM ĐHQG',
      money: '-152.000',
      type: 'out'
    },
    {
      time: '03/01/2019 15:07:23',
      content: '4262472462462464 - Thanh toán Circle K',
      money: '-82.000',
      type: 'out'
    },
    {
      time: '05/01/2019 12:12:12',
      content: '4262472462462462 - Rút tiền ATM NGTHITHAP',
      money: '-2.000.000',
      type: 'out'
    }
  ]

  return (
    <div className='chi-tiet-the'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            THÔNG TIN THẺ
          </div>
        </div>
      </div>

      <div className='main-column'>
        <div
          className='main-content'
          onClick={() => {
            if (window.innerWidth >= 768) {
              props.history.push('/chitietthe')
            }
          }}
        >
          <div className='left'>
            <img
              onClick={() => {
                if (window.innerWidth < 768) {
                  props.history.push('/chitietthe')
                }
              }}
              className='img-the'
              alt=''
              src={item.image}
            />

            <div className='info-the'>
              <div className='group-info'>
                <div className='label'>Số thẻ:</div>
                <div className='content'>{item.soThe}</div>
              </div>
              <div className='group-info'>
                <div className='label'>Chủ thẻ:</div>
                <div className='content'>{item.chuThe}</div>
              </div>
              <div className='group-info'>
                <div className='label'>Loại thẻ:</div>
                <div className='content'>{item.loaiThe}</div>
              </div>
              <div className='group-info'>
                <div className='label'>Trạng thái:</div>
                <div className='content'>
                  {item.trangThai === 'active' && (
                    <div className='trang-thai'>
                      <div className='active' />
                      Active
                    </div>
                  )}
                  {item.trangThai === 'inactive' && (
                    <div className='trang-thai'>
                      <div className='inactive' />
                      In Active
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

          <div className='right'>
            <div className='list-giao-dich'>
              {listGiaoDich.map(item => (
                <div className='item'>
                  <div className='item-left'>
                    <div className='time'>{item.time}</div>
                    <div className='content'>{item.content}</div>
                  </div>

                  <div className='item-right'>
                    {item.money}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Form.create()(withRouter(inject('store')(observer(ChiTietThe))))