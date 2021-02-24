import React, {useEffect} from 'react'
// @ts-ignore
import {Link, useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Layout, Menu} from 'antd'
import {authLogout, setMe} from '../../redux/authReducer'
import {UploadOutlined, UserOutlined, CoffeeOutlined} from '@ant-design/icons'
import './CustomLayout.css'
import {CustomAvatar} from '../CustomAvatar/CustomAvatar'
import {FileUploader} from '../FileUploader/FileUploader'
import {RootState} from '../../redux/rootReducer'

const {Header, Content, Footer, Sider} = Layout


export const CustomLayout: React.FC<React.ReactNode> = ({children}) => {
    const dispatch = useDispatch()
    const avatar = useSelector((state: RootState) => state.auth.avatar)
    const userId = useSelector((state: RootState) => state.auth.userId)
    const userName = useSelector((state: RootState) => state.auth.name)
    const history = useHistory()
    let location = useLocation()
    const logoutHandler = () => {
        dispatch(authLogout())
        localStorage.removeItem('userData')
        history.push(`/`)
    }

    useEffect(() => {
        dispatch(setMe(userId))
    }, [avatar])

    return (

        <Layout style={{minHeight: '100vh', height: 'auto'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken)
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type)
                }}
            >
                <div className="logo"/>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/flood']}
                      selectedKeys={[location.pathname]}
                >
                    <Menu.Item key="/prof" icon={<UserOutlined/>}>
                        <Link to="/prof">Corporate Chat</Link>
                    </Menu.Item>
                    <Menu.Item key="/flood" icon={<CoffeeOutlined/>}>
                        <Link to="/flood"> Flood Chat</Link>
                    </Menu.Item>
                    <Menu.Item key="/info" icon={<UploadOutlined/>}>
                        <Link to="/info">Information</Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background">
                    <div className='me'>
                        <div className='name'>{userName}</div>
                        {
                            avatar
                                ?
                                <CustomAvatar avatar={avatar}/>
                                :
                                <div className='uploadWrapper'>
                                    <FileUploader/>
                                </div>
                        }


                        <div className='logout'>
                            <Link to={'/'} onClick={logoutHandler}>Log Out</Link>
                        </div>
                    </div>

                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Planktonics ©2021 Created by Roman Kruglyanski</Footer>
            </Layout>
        </Layout>

    )
}