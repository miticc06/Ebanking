/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Button } from 'antd'
import './style.less'

function ChiTietUuDai (props) {
  const uuDai = {
    title: 'GIẢM NGAY 1 TRIỆU ĐỒNG CHO CHỦ THẺ QUỐC TẾ SB GLOBE TRÊN TOÀN HỆ THỐNG FPT SHOP',
    description:
      'Chào đón mùa lễ hội đầy sắc màu cuối năm, từ ngày 02.11 – 31.12.2019, '
      + 'ACB sẽ dành hơn 37,000 bộ quà tặng phiên bản đặc biệt 12 con giáp và bộ quà '
      + 'tặng gốm sứ Minh Long cho khách hàng gửi tiết kiệm tại quầy. Để nhân thêm niềm vui, '
      + 'khi phát sinh giao dịch tại quầy hoặc trên online, khách hàng còn có thêm cơ hội tham ',
    postedDate: '01/12/2019',
    image: '3.png'
  }

  useEffect(() => {
    props.store.appBar.setTitle('THÔNG TIN TÀI KHOẢN')
  }, [props.store.appBar])

  return (
    <div className='chi-tiet-uu-dai'>
      <div className='header'>
        <div className='info'>
          <div className='message'>
            TIN TỨC - ƯU ĐÃI
          </div>
        </div>
      </div>
      <div className='main-column main-content'>

        <div className='title'>
          {uuDai.title}
        </div>
        <div className='posted-date'>
          {`Ngày đăng: ${uuDai.postedDate}`}
        </div>
        <div className='image-container'>
          <img className='image' alt='' src={`${uuDai.image}`} />
        </div>
        <p className='content'>
          <strong>Nội dung ưu đãi:</strong>
          <br />
          - Giảm trực tiếp 1.000.000 đồng cho chủ thẻ quốc tế BIDV khi mua sản phẩm có giá trị từ 10.000.000 đồng trở lên trong thời gian khuyến mại tại website www.fptshop.com.vn và thanh toán trực tuyến bằng thẻ quốc tế BIDV.
          <br />
          - Áp dụng đồng thời cùng các chương trình ưu đãi khác nhưng không áp dụng cùng chương trình “Siêu trả góp, Siêu hoàn tiền”
          <br />
          - Mỗi chủ thẻ chỉ được ưu đãi 1 lần trong suốt thời gian diễn ra CTKM.
          <br />
          <strong>Đối tượng áp dụng:</strong>
          <br />
          -Thẻ quốc tế BIDV không bao gồm thẻ ghi nợ doanh nghiệp, thẻ tín dụng doanh nghiệp, thẻ thu phí viên. Cụ thể các loại thẻ được áp dụng gồm:
          <br />
          - Thẻ tín dụng quốc tế BIDV Visa Infinite
          <br />
          - Thẻ quốc tế hạng Bạch Kim: thẻ tín dụng BIDV MasterCard Platinum, thẻ tín dụng BIDV Visa Platinum, thẻ tín dụng BIDV Vietravel Platinum, thẻ tín dụng BIDV Premier, thẻ ghi nợ BIDV Mastercard Platinum, thẻ ghi nợ BIDV Premier.
          <br />
          - Thẻ quốc tế hạng khác: thẻ tín dụng BIDV Precious, thẻ tín dụng BIDV Smile, thẻ tín dụng BIDV Flexi, thẻ tín dụng BIDV Vietravel Standard, thẻ ghi nợ BIDV Ready, thẻ ghi nợ BIDV Vietravel, thẻ ghi nợ BIDV Young +.
          <br />
          <strong>Phạm vi áp dụng:</strong>
          {' '}
          Chương trình chỉ áp dụng cho khách hàng thanh toán trực tuyến tại website www.fptshop.com.vn.
        </p>

        <div className='related-post'>
          <h3>Bài viết liên quan</h3>
          <ul>
            <li>
              <a>Drazil and Factorial</a>
            </li>
            <li>
              <a>Drazil and Factorial</a>
            </li>
            <li>
              <a>Drazil and Factorial</a>
            </li>
            <li>
              <a>Drazil and Factorial</a>
            </li>
            <li>
              <a>Drazil and Factorial</a>
            </li>
          </ul>
        </div>
        <div className='footer-content'>
          <Button icon='left'>
            Trở về
          </Button>

          <Button icon='right'>
            Kế tiếp
          </Button>
        </div>
      </div>
    </div>
  )
}
export default withRouter(inject('store')(observer(ChiTietUuDai)))