import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Row, Col, Tabs, Button } from 'antd'
import './style.less'

function UuDai (props) {
  useEffect(() => {
    props.store.appBar.setTitle('TIN TỨC - KHUYẾN MÃI')
  }, [props.store.appBar])

  const list = [
    {
      title: 'Tiêu mạnh tay, nhận tiền ngay - Ưu đãi trả góp hoàn tiền',
      description:
        'Chào đón mùa lễ hội đầy sắc màu cuối năm, từ ngày 02.11 – 31.12.2019, '
        + 'ACB sẽ dành hơn 37,000 bộ quà tặng phiên bản đặc biệt 12 con giáp và bộ quà '
        + 'tặng gốm sứ Minh Long cho khách hàng gửi tiết kiệm tại quầy. Để nhân thêm niềm vui, '
        + 'khi phát sinh giao dịch tại quầy hoặc trên online, khách hàng còn có thêm cơ hội tham ',
      postedDate: '01/12/2019',
      image: '1.png'
    },
    {
      title:
        'Giảm ngay 1 triệu đồng cho chủ thẻ quốc tế SB Globe trên toàn hệ thống FPT Shop',
      description:
        'Theo đó, khách hàng vay vốn sẽ được nhận ngay quà tặng lên đến 500.000 đồng dưới hình thức là thẻ quà tặng '
        + 'VinID hoặc tiền mặt tùy theo giá trị hợp đồng tín dụng. Chương trình áp dụng với các đối tượng'
        + ' khách hàng đăng ký tham gia các sản phẩm'
        + ' của VinGroup tại bất kì cửa hàng nào thuộc hệ thống FPT Shop.',
      postedDate: '30/11/2019',
      image: '2.png'
    }
  ]
  return (
    <div className='tin-tuc-khuyen-mai '>
      <div className='header'>
        <div className='info'>
          <div className='message'>TIN TỨC - ƯU ĐÃI</div>
        </div>
      </div>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
          <List
            className='list-tai-khoan'
            itemLayout='horizontal'
            dataSource={list}
            renderItem={item => (
              <div
                className='list-item'
              >
                <Col span={12}>
                  <img className='image' alt='' src={`${item.image}`} />
                </Col>
                <Col span={12}>
                  <div className='content'>
                    <div
                      className='title' 
                      onClick={() => props.history.push('/chitietuudai')}
                    >
                      {item.title}
                    </div>
                    <p className='description'>{`${item.description}`}</p>
                  </div>
                  <div className='footer'>
                    <div className='postedDate'>{`Ngày đăng: ${item.postedDate}`}</div>
                    <div
                      className='intoDetail'
                      onClick={() => props.history.push('/chitietuudai')}
                    >
                      Xem chi tiết
                    </div>
                  </div>
                  
                </Col>
              </div>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(inject('store')(observer(UuDai)))
