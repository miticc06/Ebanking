import React, { useEffect, useState } from 'react'
import { Modal, Button, Input } from 'antd'

function ModalConfirmSms (props) {
  return (
    <div>
      <Modal
        title='Xác nhận giao dịch'
        centered
        visible={props.visible}
        onOk={null}
        onCancel={props.hideModal}
      >
        <p>
          Quý khách vui lòng nhập mã OTP được gửi về số điện thoại để xác
          nhận giao dịch.
        </p>
        <div>
          <Input suffix='OTP' />
        </div>
      </Modal>
    </div>
  )
}
export default ModalConfirmSms