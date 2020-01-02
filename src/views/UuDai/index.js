import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { List, Row, Col, Tabs, Button, DatePicker, Icon, Input } from 'antd'
import './style.less'

const { RangePicker } = DatePicker
const { Search } = Input

function UuDai (props) {
  const [filter, setFilter] = useState('all')
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [visibleModalFilter, setVisibleModalFilter] = useState(false)
  const [keywordFilter, setKeywordFilter] = useState('')
  const [promotionList, setPromotionList] = useState([])

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

  useEffect(() => {
    props.store.appBar.setTitle('TIN TỨC - KHUYẾN MÃI')
    setPromotionList(list)
  }, [props.store.appBar])


  const filterKeyword = event => {
    let kw = event.target.value
    kw = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    if (kw !== '') {
      setPromotionList(list.filter(promotion => (promotion.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(kw))
        || promotion.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(kw)))
    } else setPromotionList(list)
  }

  const filterDate = event => {
    console.log('Tượng trưng thôi, làm biếng convert cái sample data =))')
  }

  return (
    <div className='tin-tuc-khuyen-mai '>
      <div className='header'>
        <div className='info'>
          <div className='message'>TIN TỨC - ƯU ĐÃI</div>
        </div>
      </div>
      
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
          <div className='control-filter'>
            <div
              onClick={() => {
                setVisibleFilter(prevState => !prevState)
              }}
              className={`bo-loc${visibleFilter ? ' selected' : ''}`}
            >
              BỘ LỌC
              <Icon type='sliders' style={{ fontSize: 25, margin: '0px 0px 0px 10px' }} />
            </div>
            {visibleFilter ? (
              <div className='group-filter'>
                <div className='keyword-filter'>
                  <Search
                    placeholder='Tìm kiếm từ khoá'
                    onChange={e => filterKeyword(e)}
                    style={{ width: 250 }}
                    size={window.innerWidth >= 768 ? 'large' : 'default'}
                  />
                </div>
                <div className='date-filter'>
                  <RangePicker
                    format='DD/MM/YYYY'
                    placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
                    size={window.innerWidth >= 768 ? 'large' : 'default'}
                    style={{ width: 250 }}
                    onChange={e => filterDate(e)}
                  />
                </div>
              </div>
            ) : ''}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
          <List
            className='list-tai-khoan'
            itemLayout='horizontal'
            dataSource={promotionList}
            renderItem={item => (
              <div
                className='list-item'
              >
                <Col span={12}>
                  <div>
                    <img className='image' alt='' src={`${item.image}`} />
                  </div>
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
