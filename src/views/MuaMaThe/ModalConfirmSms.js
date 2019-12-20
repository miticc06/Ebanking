import React, { useState } from 'react'
import { Modal, Input, Button } from 'antd'

function ModalConfirmSms (props) {
  const [confirmWait, setConfirmWait] = useState(false)
  const [canConfirm, setCanConfirm] = useState(false)
  const [otpCode, setOtpCode] = useState('')

  const handleOk = () => {
    setConfirmWait(true)
    setTimeout(() => {
      setConfirmWait(false)
      props.setConfirmSuccess(true)
      props.hideModal()
    }, 2000)
  }

  return (
    <div>
      <Modal
        title='Xác nhận giao dịch'
        centered
        visible={props.visible}
        onOk={handleOk}
        onCancel={props.hideModal}
        footer={[
          <Button key='back' onClick={props.hideModal}>
            Huỷ bỏ
          </Button>,
          <Button key='submit' type='primary' disabled={!canConfirm} loading={confirmWait} onClick={handleOk}>
            Tiếp tục
          </Button>
        ]}
      >
        <p>
          Quý khách vui lòng nhập mã OTP được gửi về số điện thoại để xác
          nhận giao dịch.
        </p>
        <div>
          <Input
            value={otpCode}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '')
              setOtpCode(value)
              setCanConfirm(value.length > 0)
            }}
            suffix='OTP'
          />
        </div>
      </Modal>
    </div>
  )
}
export default ModalConfirmSms