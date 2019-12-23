import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import AppBar from 'components/AppBar'

function LayoutApp (props) {
  return (
    <Layout>
      <AppBar />
      <Layout style={{ padding: '25px 25', background: '#f2f2f2', minHeight: '100vh' }}>
        {props.children}
      </Layout>
    </Layout>
  )
}
export default withRouter(inject('store')(observer(LayoutApp)))