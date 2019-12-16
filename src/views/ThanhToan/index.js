import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { useEffect } from 'react'


function ThanhToan (props) {
  useEffect(() => {
    props.store.appBar.setTitle('THANH TOÁN')
  }, [props.store.appBar])

  return 'thanh toan'
}
export default withRouter(inject('store')(observer(ThanhToan)))