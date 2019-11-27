import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

function Dashboard (props) {
  return 'this is dashboard'
}
export default withRouter(inject('store')(observer(Dashboard)))