import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react'
import { OutlineLogo } from '../assets';
import { Divider, Typography } from 'antd';
const { Link } = Typography;

const Navigation = () => {
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