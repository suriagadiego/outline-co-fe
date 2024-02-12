import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react'
import { OutlineLogo } from '../assets';
import { Divider, Typography } from 'antd';
import { setAuthInterceptor } from '../interceptors/request';
const { Link } = Typography;

const Navigation = () => {
    const accessToken = localStorage.getItem('access');

    const handleLogout = () => {
        localStorage.removeItem('access');
        setAuthInterceptor(null);
        window.location.href = '/'
    }

    return (
        <div>
            <div className='w-full m-auto flex justify-center'>
                <OutlineLogo width='380' height='120'/>
                <div className='my-auto fixed top-[46px] right-[35px] flex gap-2'>
                    <SearchOutlined className='my-auto' 
                        style={{ fontSize: '20px', color: '#2B2B2B' }} />
                    <ShoppingCartOutlined className='my-auto' 
                        style={{ fontSize: '20px', color: '#2B2B2B' }}
                    />
                    <div className='my-md uppercase text-xs hover:opacity-80'>
                        {accessToken ? <a href='/' onClick={handleLogout}>Logout</a> : <a href='/sign-in'>Sign In</a>}
                    </div>
                </div>
            </div>
            <div>
                <Link className='text-sm'>SHIRTS</Link>
                <Divider type="vertical" />
                <Link className='text-sm'>HOODIES</Link>
                <Divider type="vertical" />
                <Link className='text-sm'>BAGS</Link>
            </div>
        </div>
        
    );
}
 
export default Navigation;