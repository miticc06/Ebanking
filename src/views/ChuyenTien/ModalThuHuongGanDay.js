import React, { useState } from 'react'
import { Modal, Radio, List, Button } from 'antd'

function ModalThuHuongGanDay (props) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const list = [
    {
      soTaiKhoan: 'TK-31410.00319.49905',
      tenTaiKhoan: 'DANG MINH TIEN',
      value: 0
    },
    {
      soTaiKhoan: 'TK-31410.00319.49905',
      tenTaiKhoan: 'NGUYEN BA TUNG',
      value: 1
    },
    {
      soTaiKhoan: 'TK-31410.00319.49905',
      tenTaiKhoan: 'NGUYEN THANH LUAN',
      value: 2
    },
    {
      soTaiKhoan: 'TK-31410.00319.49905',
      tenTaiKhoan: 'ANH ABCXYZ',
      value: 3
    }
  ]

  const styles = {
    radioStyle: {
      display: 'block',
      height: '70px',
      lineHeight: '25px'
    },
    info: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.5)'
    },
    tenTaiKhoan: {
      marginLeft: '20px',
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.075em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    soTaiKhoan: {
      marginLeft: '43px',
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '22px',
      letterSpacing: '0.045em',
      color: 'rgba(0, 0, 0, 0.5)'
    }
  }

  const handleOKPressed = () => {
    props.setThuHuongValue(`${list[selectedIndex].tenTaiKhoan} ${list[selectedIndex].soTaiKhoan}`)
    props.hideModal()
  }

  return (
    <div>
      <Modal
        title='Tài khoản thụ hưởng gần đây'
        centered
        visible={props.visible}
        onOk={handleOKPressed}
        onCancel={props.hideModal}
        footer={[
          <Button key='back' onClick={props.hideModal}>
            Huỷ bỏ
          </Button>,
          <Button key='submit' type='primary' onClick={handleOKPressed}>
            Tiếp tục
          </Button>
        ]}
      >
        <p style={styles.info}>
          Chọn tài khoản thụ hưởng:
        </p>
        <div>
          <Radio.Group 
            defaultValue={0} 
            onChange={(e) => {
              setSelectedIndex(e.target.value)
            }}
          >
            <List
              itemLayout='horizontal'
              dataSource={list}
              renderItem={item => (
                <Radio style={styles.radioStyle} value={item.value}>
                  <span style={styles.tenTaiKhoan}>{item.tenTaiKhoan}</span> 
                  <div>
                    <span style={styles.soTaiKhoan}>{item.soTaiKhoan}</span>
                  </div>
                </Radio>
              )} 
            />
          </Radio.Group>
        </div>
      </Modal>
    </div>
  )
}
export default ModalThuHuongGanDay