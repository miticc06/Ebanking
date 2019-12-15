import React, { useState } from 'react'
import { Modal, Input, Button } from 'antd'

const { Search } = Input

function ModalSoTheThuHuong (props) {
  const [searchWaiting, setSearchWaiting] = useState(false)
  const [showSearchResult, setShowSearchResult] = useState(false)
  const [soTaiKhoan, setSoTaiKhoan] = useState('')

  const searchResult = {
    tenTaiKhoan: 'DANG MINH TIEN',
    diaChi: 'Bến Tre',
    chiNhanh: 'Đồng Khởi'
  }

  const styles = {
    groupItem: {
      background: '#fff',
      marginBottom: '15px'
    },
    label: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    item: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      marginTop: '15px'
    },
    searchResult: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.87)',
      marginTop: '10px'
    }
  }

  const handleOk = () => {
    // reset fields
    setShowSearchResult(false)
    setSoTaiKhoan('')

    props.setThuHuongValue(`${searchResult.tenTaiKhoan} ${soTaiKhoan}`)
    props.hideModal()
  }

  const handleCancel = () => {
    props.hideModal()
  }

  const handleSearch = (value) => {
    setSoTaiKhoan(value)
    setSearchWaiting(true)
    setTimeout(() => { 
      setSearchWaiting(false)
      setShowSearchResult(true) 
    }, 1000)
  }

  return (
    <div>
      <Modal
        title='Đến số thẻ ngân hàng'
        centered
        visible={props.visible}
        onOk={null}
        onCancel={props.hideModal}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Huỷ bỏ
          </Button>,
          <Button key='submit' type='primary' disabled={!showSearchResult} onClick={handleOk}>
            Tiếp tục
          </Button>
        ]}
      >
        <div style={styles.groupItem}>
          <div style={styles.label}>Tìm số thẻ ngân hàng</div>
          <div style={styles.item}>
            <Search
              placeholder='Nhập số thẻ'
              size='large'
              loading={searchWaiting}
              onSearch={(value) => handleSearch(value)}
            />
          </div>
          <br />
          <br />
          {showSearchResult ? (
            <div style={styles.groupItem}>
              <div style={styles.label}>Kết quả tìm kiếm</div>
              <div style={styles.searchResult}>{`Tên tài khoản: ${searchResult.tenTaiKhoan}`}</div>
              <div style={styles.searchResult}>{`Tỉnh/Thành phố: ${searchResult.diaChi}`}</div>
              <div style={styles.searchResult}>{`Chi nhánh: ${searchResult.chiNhanh}`}</div>
            </div>
          ) : ''}
        </div>
      </Modal>
    </div>
  )
}
export default ModalSoTheThuHuong