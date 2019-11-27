import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
// import { PageHeader, Icon, Menu, Dropdown, Divider, Layout } from 'antd'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import AppBar from 'components/AppBar'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
// import BgDashboard from '../../assets/images/bg-dashboard.jpg'

function LayoutApp (props) {
  // console.log(props)
  return (
    <Layout>
      <AppBar store={props.store} />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Content style={{ padding: '0 24px', minHeight: '90vh' }}>

            {props.children}


          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       // backgroundImage: `url(${BgDashboard})`,
  //       backgroundRepeat: 'no-repeat',
  //       backgroundPosition: 'center center',
  //       backgroundAttachment: 'fixed',
  //       backgroundSize: 'cover',
  //       overflowY: 'scroll',
  //       WebkitOverflowScrolling: 'touch'
  //     }}
  //   >
  //     <div
  //       style={
  //         {
  //           // perspectiveOrigin: '25% 75%',
  //           // transform: 'perspective(300px) rotateY(-20deg)'
  //         }
  //       }
  //     >
  //       <AppBar />
  //       {/* <PageHeader
  //         onBack={() => children.props.history.goBack()}
  //         title={(
  //           <Icon
  //             type='home'
  //             onClick={() => children.props.history.push('/🥢')}
  //             style={{ color: '#fff' }}
  //           />
  //         )}
  //         backIcon={<Icon type='left' style={{ color: '#fff' }} />}
  //         extra={[
  //           <Dropdown key='1' overlay={menu}>
  //             <Icon
  //               type='user'
  //               style={{
  //                 color: '#ffffff',
  //                 fontSize: '16px',
  //                 fontWeight: 'bold',
  //                 cursor: 'pointer'
  //                 // marginRight: '.5em'
  //               }}
  //             />
  //           </Dropdown>
  //         ]}
  //         style={{ backgroundColor: 'transparent' }}
  //         footer={<Divider style={{ margin: '0' }} />}
  //       /> */}
  //       {children}
  //     </div>
  //   </div>
  // )
}
export default withRouter(inject('store')(observer(LayoutApp)))