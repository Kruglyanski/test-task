import React from 'react'
import { Layout, Menu } from 'antd'
import {authLogout} from '../../redux/authReducer'
import { UploadOutlined, UserOutlined, CoffeeOutlined } from '@ant-design/icons'
import {Link, useHistory, useLocation} from 'react-router-dom'
import './CustomLayout.css'
import { useDispatch } from 'react-redux'
const { Header, Content, Footer, Sider } = Layout


export const CustomLayout:React.FC<React.ReactNode> = ({children}) => {
    const history = useHistory()
    let location = useLocation()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        //localStorage.removeItem('userData')
        dispatch(authLogout())
        history.push(`/`)
    }
    return (

        <Layout style={{minHeight: '100vh', height: 'auto'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />

                <Menu theme="dark" mode="inline" defaultSelectedKeys={["/flood"]}
                      selectedKeys={[location.pathname]}
                >
                    <Menu.Item key="/prof" icon={<UserOutlined />}>
                        <Link to="/prof">Corporate Chat</Link>
                    </Menu.Item>
                    <Menu.Item key="/flood" icon={<CoffeeOutlined />}>
                        <Link to="/flood"> Flood Chat</Link>
                    </Menu.Item>
                    <Menu.Item key="/something" icon={<UploadOutlined />}>
                        <Link to="/something">Something Else</Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background"  >

                    <div className='logout' >
                        <Link to={'/'} onClick={logoutHandler}>Выйти</Link>
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Planktonics ©2021 Created by Roman Kruglyanski</Footer>
            </Layout>
        </Layout>

    )
}