import React, { useState } from 'react';
import { createProduct, getProducts } from '../services/api/api';
import useMount from '../hooks/useMount';
import { Button, Form, Input, Modal, Typography, notification } from "antd";
import { useNavigate } from 'react-router-dom';
const { Text } = Typography;

const ProductList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const navigate = useNavigate();

    const fetchProductList = async() => {
        const { data } = await getProducts();
        setLoading(false);
        setData(data.data);
    }

    useMount(() => {
        fetchProductList();
    })

    const handleButtonClick = () => {
        setIsFormOpen(!isFormOpen);
    };

    const onFinish = async(values) => {
        const body = {
          product_name: values.productName,
          description: values.descriptionField,
          price: values.priceField
        }
        setIsFormOpen(false);
        setLoading(true);
        const { data, error } = await createProduct(body);
        if (!error && data) {
            notification.success({
                message: 'Success',
                description: 'Successfully created a product.',
                duration: 3,
            });
            fetchProductList();
            setLoading(false);
        } else {
            notification.error({
                message: 'Error',
                description: 'Something went wrong.. Please contact administrator.',
                duration: 3,
            });
        }
      };

    return <div>
        <Button onClick={handleButtonClick} className='my-md uppercase text-sm'>Add Product</Button>

        <div className='grid grid-cols-4 m-md gap-4'>
            {!loading ? data?.map((d, index) => (
                <div key={index} className='p-md border border-solid 
                                    border-gray-400 max-w-1.5 text-wrap w-[300px] 
                                      col-span-1 hover:opacity-80'
                     onClick={() => navigate(`${d.id}`)}>
                    <div className='margin-auto'>
                        <img src="../src/assets/images/shirt2.png" alt={`Product ${index + 1}`} width={250} height={250}/>
                    </div>                    
                    <Text className='block font-semibold uppercase'>{d.product_name}</Text>
                    <Text className='block text-wrap'>{d.description}</Text>
                    <Text className='block font-semibold uppercase'>{`P ${d.price}`}</Text>
                </div>
            )) : <div className='text-center'>Loading...</div>}
        </div>
        {!loading ? <div className='mb-md uppercase text-gray text-sm'>End of the List.</div> : ''}
        <Modal title='Add Product' open={isFormOpen} footer={false} destroyOnClose closable onCancel={() => setIsFormOpen(false)}>
            <Form
            name="productForm"
            onFinish={onFinish}
            initialValues={{
                productName: '',
                descriptionField: '',
                priceField: '',
            }}
            >
            <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: 'Please input the product name.' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="descriptionField"
                rules={[{ required: true, message: 'Please input the description.' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label="Price"
                name="priceField"
                rules={[{ required: true, message: 'Please input the price.' }]}
            >
                <Input type="number" min={0} step={0.01} />
            </Form.Item>
            <Form.Item>
                <div className="flex gap-2">
                <Button type="secondary" className="text-black border-solid border border-gray-200 hover:bg-white"
                    onClick={() => setIsFormOpen(false)}>
                    Cancel
                </Button>
                <Button loading={loading} 
                    type="primary" htmlType="submit" className="text-black border-solid border border-gray-600 hover:bg-white">
                    Add
                </Button>
                </div>
            </Form.Item>
            </Form>
        </Modal>
    </div>
}

export default ProductList;