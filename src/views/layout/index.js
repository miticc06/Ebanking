import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import AppBar from 'components/AppBar'

function LayoutApp (props) {
  console.log(props)
  return (
    <Layout>
      <AppBar store={props.store} history={props.history} />

      <Layout style={{ padding: '25px 25', background: '#fff' }}>

        {props.children}
      </Layout>
    </Layout>
  )
}
export default withRouter(inject('store')(observer(LayoutApp)))