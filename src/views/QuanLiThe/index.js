/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { List, Radio, Icon, Modal, Form } from 'antd'
import './style.less'
import the1 from '../../image/the1.png'
import the2 from '../../image/the2.png'

function QuanLiThe (props) {
  const [filter, setFilter] = useState('all')
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [visibleModalFilter, setVisibleModalFilter] = useState(false)
  const { form } = props
  useEffect(() => {
    props.store.appBar.setTitle('DỊCH VỤ THẺ')
  }, [props.store.appBar])

  const list = [
    {
      soThe: '1234 5678 9876 5432',
      image: the1,
      chuThe: 'Dang Minh Tien',
      loaiThe: 'ATM nội địa',
      trangThai: 'active'
    },
    {
      soThe: '4000 1111 1111',
      image: the2,
      chuThe: 'Dang Minh Tien',
      loaiThe: 'Visa',
      trangThai: 'inactive'
    }
  ]
  return (
    <div className='the'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            DANH SÁCH THẺ
          </div>
        </div>
      </div>

      <div className='main-column'>
        <div className='control-filter'>
          {visibleFilter && (
            <Radio.Group
              className='radio-btn'
              onChange={(e) => {
                setFilter(e.target.value)
              }}
              value={filter}
            >
              <Radio value='all'>Tất cả</Radio>
              <Radio value='active'>Đang hoạt động</Radio>
              <Radio value='inactive'>Ngưng hoạt động</Radio>
            </Radio.Group>
          )}
          <div
            onClick={() => {
              if (window.innerWidth < 768) {
                setVisibleFilter(false)
                setVisibleModalFilter(prevState => !prevState)
              } else {
                setVisibleModalFilter(false)
                setVisibleFilter(prevState => !prevState)
              }
            }}
            className={`bo-loc${visibleFilter ? ' selected' : ''}`}
          >
            BỘ LỌC
            <Icon type='filter' style={{ margin: '0px 0px 0px 5px' }} />
          </div>
        </div>

        <List
          className='list-the'
          itemLayout='horizontal'
          dataSource={list.filter(card => filter === 'all' || filter === card.trangThai)}
          renderItem={item => (
            <div
              className='list-item'
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
              </div>

              <div className='right'>
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
          )}
        />
      </div>

      <Modal
        title='Bộ lọc'
        centered
        visible={visibleModalFilter}
        onOk={() => {
          form.validateFields((errors, formData) => {
            setFilter(formData.filter)
            setVisibleModalFilter(false)
          })
        }}
        onCancel={() => setVisibleModalFilter(false)}
      >
        <Form>
          {form.getFieldDecorator('filter', {
            initialValue: filter
          })(
            <Radio.Group
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Radio value='all'>Tất cả</Radio>
              <Radio value='active'>Đang hoạt động</Radio>
              <Radio value='inactive'>Ngưng hoạt động</Radio>
            </Radio.Group>
          )}
        </Form>
      </Modal>
    </div>
  )
}
export default Form.create()(withRouter(inject('store')(observer(QuanLiThe))))