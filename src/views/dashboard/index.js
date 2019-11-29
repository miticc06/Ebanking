import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { useEffect } from 'react'


function Dashboard (props) {
  useEffect(() => {
    props.store.appBar.setTitle('HOME')
  }, [props.store.appBar])

  return 'this is dashboard'
}
export default withRouter(inject('store')(observer(Dashboard)))