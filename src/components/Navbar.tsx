import { Layout, Menu, Row } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { RouteName } from '../router/routerPages';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: React.FC = () => {
    const router = useHistory()
    const isAuth = useTypedSelector(state => state.auth.auth)
    return (
        <Layout.Header>
            <Row justify='end'>
                {
                    isAuth
                        ?
                        <>
                            <div style={{ color: 'white'}}>
                                User Name
                            </div>
                            <Menu theme='dark' mode='horizontal' selectable={false} defaultSelectedKeys={['2']} >

                                <Menu.Item onClick={() => console.log('Logout')} key='1' >
                                    Logout
                                </Menu.Item>
                            </Menu>
                        </>

                        :
                        <Menu theme='dark' mode='horizontal' selectable={false} defaultSelectedKeys={['2']} >
                            <Menu.Item onClick={() => router.push(RouteName.LOGIN)} key='1' >
                                Login
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    )

}
export default Navbar