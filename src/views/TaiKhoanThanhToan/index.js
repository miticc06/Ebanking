
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Row, Col, Tabs, Button, Icon, Tooltip } from 'antd'
import './style.less'


const { TabPane } = Tabs

const ListHistories = (props) => (
  <List
    className='list-tai-khoan'
    itemLayout='horizontal'
    dataSource={props.list}
    renderItem={item => (
      <div
        className='list-item'
      >
        <div className='left'>
          <div className='thoi-gian'>{item.thoiGian}</div>
          <div className='thong-tin-giao-dich'>
            {`${item.soTaiKhoan} - ${item.noiDung}`}
          </div>
        </div>
        <div className='right'>
          {item.type === 'in'
            && <div className='so-tien' style={{ color: 'rgba(24, 133, 234, 0.87)' }}>{item.soTien}</div>}
          {item.type === 'out'
            && <div className='so-tien' style={{ color: 'red' }}>{item.soTien}</div>}
        </div>
      </div>
    )}
  />
)

function TaiKhoan (props) {
  useEffect(() => {
    props.store.appBar.setTitle('TÀI KHOẢN THANH TOÁN')
  }, [props.store.appBar])

  const list = [
    {
      thoiGian: '05/11/19 12:36:27',
      soTaiKhoan: '995219110555',
      soTien: '-48,000',
      noiDung: 'Rút tiền ATM',
      type: 'out'
    },
    {
      thoiGian: '01/11/19 08:25:32',
      soTaiKhoan: '569875364812',
      soTien: '-200,000',
      noiDung: 'Nạp tiền ví MOMO',
      type: 'out'
    },
    {
      thoiGian: '30/10/19 16:14:30',
      soTaiKhoan: '369854123698',
      soTien: '+5,480,000',
      noiDung: 'Tiền lương tháng 10-2019',
      type: 'in'
    },
    {
      thoiGian: '25/11/19 08:20:15',
      soTaiKhoan: '123658964721',
      soTien: '+14,000,000',
      noiDung: 'Học bổng học kỳ 1 - 2019-2020',
      type: 'in'
    }
  ]
  return (
    <div className='tai-khoan-thanh-toan'>
      <div className='header'>
        <div className='info'>
          <div className='title'>
            Tài khoản thanh toán
          </div>
          <div className='so-du'>
            Số dư khả dụng:
            <div style={{ fontSize: '24px', marginLeft: '5px' }}>19,200,000 VND</div>
            <Tooltip title='Thông tin tài khoản'>
              <Icon type='right' style={{ marginLeft: '5px' }} onClick={() => props.history.push('/thongtintaikhoan')} />
            </Tooltip>
          </div>

          <div className='group-button'>
            <Button onClick={() => props.history.push('/chuyentien')}>Chuyển tiền</Button>
            <Button onClick={() => props.history.push('/naptiendienthoai')}>Nạp tiền</Button>
            <Button onClick={() => props.history.push('/hoadondien')}>Thanh toán</Button>
          </div>

        </div>
      </div>
      <Row>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12, offset: 6 }}
        >
          <Tabs
            defaultActiveKey='1'
            tabBarStyle={{ textAlign: 'center' }}
          >
            <TabPane tab='Tất cả' key='1'>
              <ListHistories list={list} />
            </TabPane>
            <TabPane tab='Tiền vào' key='2'>
              <ListHistories list={list.filter(item => item.type === 'in')} />
            </TabPane>
            <TabPane tab='Tiền ra' key='3'>
              <ListHistories list={list.filter(item => item.type === 'out')} />
            </TabPane>
          </Tabs>


        </Col>

      </Row>


    </div>
  )
}
export default withRouter(inject('store')(observer(TaiKhoan)))