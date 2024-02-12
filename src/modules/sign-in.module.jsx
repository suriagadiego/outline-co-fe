import { Form, Input, Button } from 'antd';
import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api/api';
import { setAuthInterceptor } from '../interceptors/request';

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await loginUser(values);
    if (data) {
        localStorage.setItem('access', data.data.access);
        setAuthInterceptor(data.data.access);
        navigate("/product");
    }
  };

  return (
    <div>
      <h2 className='my-md'>Sign in to your account</h2>
      <div className='w-[350px] m-auto'>
        <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
            label={<span className='uppercase text-xs'>Email</span>}
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={<span className='uppercase text-xs'>Password</span>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password type='password'/>
            </Form.Item>
            <Form.Item>
            <Button htmlType="submit" className="text-black border-solid border border-gray-600 hover:bg-white">
                Login
            </Button>
            </Form.Item>
        </Form>
      </div>
      
    </div>
  );
}

export default SignIn;