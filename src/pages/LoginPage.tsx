import { Layout, Row } from 'antd'
import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage: React.FC = () => {
    return (
        <Layout>
            <Row justify='center' align='middle' className='h100' >
                <LoginForm />
            </Row>

        </Layout>
    )

}
export default LoginPage