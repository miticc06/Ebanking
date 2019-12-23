import React, { useState } from 'react'
import { Modal, Input, Button, DatePicker, Row, Col, AutoComplete } from 'antd'

const InputGroup = Input.Group

function ModalSoCMNDPassport (props) {
  const [hoTen, setHoTen] = useState('')
  const [soCMNDPassport, setSoCMNDPassport] = useState('')

  const citiesData = ['Hà Nội', 'Thành phố Hồ Chí Minh', 'Đà Nẵng', 'Huế', 'Cần Thơ', 'Bến Tre', 'Dũng Tàu']
  const banksData = ['Ngân hàng A', 'Ngân hàng B', 'Ngân hàng C', 'Ngân hàng D', 'Ngân hàng E']
  const branchesData = ['Chi nhánh X', 'Chi nhánh Y', 'Chi nhánh Z']

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
    }
  }

  const handleOk = () => {
    props.setThuHuongValue(`${hoTen}, So CMND-${soCMNDPassport}`)
    props.hideModal()
  }

  const handleCancel = () => {
    props.hideModal()
  }

  return (
    <div>
      <Modal
        title='Đến số CMND/Passport'
        centered
        visible={props.visible}
        onOk={null}
        onCancel={props.hideModal}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Huỷ bỏ
          </Button>,
          <Button key='submit' type='primary' disabled={false} onClick={handleOk}>
            Tiếp tục
          </Button>
        ]}
      >
        <div style={styles.groupItem}>
          <div style={styles.label}>Thông tin người thụ hưởng</div>
          <div style={styles.item}>
            <Input size='large' placeholder='Nhập họ và tên...' onChange={(e) => setHoTen(e.target.value)} />
          </div>
          <div style={styles.item}>
            <Input size='large' placeholder='Nhập số CMND/Passport...' onChange={(e) => setSoCMNDPassport(e.target.value)} />
          </div>
          <div style={styles.item}>
            <InputGroup size='large'>
              <Row gutter={12}>
                <Col span={12}>
                  <DatePicker placeholder='Ngày cấp...' />
                </Col>
                <Col span={12}>
                  <Input placeholder='Nơi cấp' />
                </Col>
              </Row>
            </InputGroup>
          </div>
        </div>
        <div style={styles.groupItem}>
          <div style={styles.label}>Thông tin địa điểm thụ hưởng</div>
          <div style={styles.item}>
            <AutoComplete
              size='large'
              style={{ width: '100%' }}
              dataSource={citiesData}
              placeholder='Tỉnh/Thành phố...'
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            />
          </div>
          <div style={styles.item}>
            <AutoComplete
              size='large'
              style={{ width: '100%' }}
              dataSource={banksData}
              placeholder='Ngân hàng...'
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            />
          </div>
          <div style={styles.item}>
            <AutoComplete
              size='large'
              style={{ width: '100%' }}
              dataSource={branchesData}
              placeholder='Chi nhánh...'
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default ModalSoCMNDPassport