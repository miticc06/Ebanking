/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */

import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { List, Row, Col, Tabs, Button } from 'antd'
import './style.less'

function ChiTietUuDai(props) {
  useEffect(() => {
    props.store.appBar.setTitle('TIN TỨC - KHUYẾN MÃI')
  }, [props.store.appBar])

  const list = [
    {
      title: 'Tiêu mạnh tay, nhận tiền ngay - Ưu đãi trả góp hoàn tiền',
      description:
        'Chào đón mùa lễ hội đầy sắc màu cuối năm, từ ngày 02.11 – 31.12.2019, ACB sẽ dành hơn 37,000 bộ quà tặng phiên bản đặc biệt 12 con giáp và bộ quà tặng gốm sứ Minh Long cho khách hàng gửi tiết kiệm tại quầy. Để nhân thêm niềm vui, khi phát sinh giao dịch tại quầy hoặc trên online, khách hàng còn có thêm cơ hội tham gia cào điện tử may mắn và vòng quay may mắn với hơn 30,000 giải thưởng giá trị như chuyến du lịch dành cho gia đình, iPhone 11Pro Max, SamSung Note 10,….',
      postedDate: '01/12/2019',
      image: '1.png'
    }
  ]
  return (
    <div className='tin-tuc-khuyen-mai '>
      <div className='header'>
        <div className='info'>
          <div className='title'>TIN TỨC - ƯU ĐÃI</div>
        </div>
      </div>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
          <List
            className='list-tai-khoan'
            itemLayout='horizontal'
            dataSource={list}
            renderItem={item => (
              <div className='list-item'>
                <div>
                  <img className='image' src={'./' + item.image} />
                </div>

                <Row className='artical'>
                  <div className='postedDate'>
                    Ngày đăng: {`${item.postedDate}`}
                  </div>

                  <div className='detail'>
                    <div className='italicText'>
                      Bên cạnh việc đồng hành, tiếp vốn thực hiện ước mơ sở hữu
                      nhà, xe ôtô hay tiêu dùng, sản xuất kinh doanh của khách
                      hàng cá nhân, từ nay đến 22/01/2020 (hoặc đến khi hết quà
                      tặng), Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)
                      triển khai chương trình khuyến mại “Cùng bạn thực hiện ước
                      mơ” với ưu đãi hấp dẫn dành cho khách hàng vay vốn. Theo
                      đó, khách hàng vay vốn sẽ được nhận ngay quà tặng lên đến
                      500.000 đồng dưới hình thức là thẻ quà tặng VinID hoặc
                      tiền mặt tùy theo giá trị hợp đồng tín dụng.{' '}
                    </div>

                    <div className='boldText'>
                      Chương trình áp dụng với các đối tượng khách hàng đăng ký
                      tham gia các sản phẩm:
                    </div>
                    <div>
                      - Vay sản xuất kinh doanh <br />- Vay mua nhà ở <br />-
                      Vay mua ô tô <br />- Vay tiêu dùng đảm bảo bằng bất động
                      sản <br />
                      Chương trình áp dụng đồng thời với các gói vay lãi suất ưu
                      đãi hiện hành: <br />- Gói “Vững bước tương lai”: gói vay
                      trung dài hạn dành cho khách hàng cá nhân vay nhu cầu nhà
                      ở đích thực, vay mua ô tô, vay sản xuất kinh doanh kỳ hạn
                      từ 36 tháng với lãi suất từ 7,3%/năm. <br />- Gói hỗ trợ
                      trung dài hạn dành riêng cho khách hàng vay mua ô tô
                      Vinfast (1.000 tỷ đồng) với lãi suất ưu đãi chỉ 9,3%/năm
                      cố định trong vòng 24 tháng đầu tiên.{' '}
                    </div>

                    <div className='boldText'>
                      Trong năm 2019, BIDV đã liên tục triển khai các gói vay
                      với quy mô lớn, lãi suất ưu đãi chỉ từ 6%/năm, để đồng
                      hành cùng hàng triệu khách hàng có nhu cầu vay vốn. Các
                      gói vay của BIDV được đông đảo khách hàng quan tâm, ủng hộ
                      và đều kết thúc trước hạn. Khách hàng vay vốn trong thời
                      gian này sẽ đồng thời được tham gia các chương trình ưu
                      đãi hấp dẫn từ các sản phẩm dịch vụ khác như ngân hàng
                      điện tử, bảo hiểm… để quản lý hiệu quả tài khoản cá nhân
                      như sau:
                    </div>
                    <div>
                      - Miễn phí duy trì dịch vụ ngân hàng điện tử <br />- Tặng
                      đến 0,2%/năm lãi suất khi gửi tiền online <br />- Ưu đãi
                      phí bảo hiểm và thẻ tín dụng theo từng thời kỳ.
                    </div>

                    <div>
                      Thông tin chi tiết xem tại www.bidv.com.vn, liên hệ Chi
                      nhánh BIDV gần nhất hoặc tổng đài chăm sóc khách hàng
                      24/7: 1900 9247 để được hỗ trợ.
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '1.5rem'
                    }}
                  >
                    <Button
                      style={{ marginRight: '1.5rem', width: '10rem' }}
                      onClick={() => props.history.push('/uudai')}
                      type='primary'
                    >
                      Quay lại
                    </Button>

                    <Button
                      style={{ marginLeft: '1.5rem', width: '10rem' }}
                      onClick={() => props.history.push('/dashboard')}
                      type='primary'
                    >
                      Trang Chủ
                    </Button>
                  </div>
                </Row>
              </div>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(inject('store')(observer(ChiTietUuDai)))
