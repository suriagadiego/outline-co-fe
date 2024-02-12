import React, { useState } from "react";
import classnames from "classnames";
import { Typography, Divider, Skeleton, Button, Modal, Form, Input, notification } from "antd";
const { Link, Text } = Typography;
import useMount from "../hooks/useMount";
import { getProduct, updateProduct, deleteProduct } from "../services/api/api";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [productInfo, setProductInfo] = useState()
  const [loading, setLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const navigate = useNavigate();
  const fetchProduct = async (id) => {
    const { data, error } = await getProduct(id)
    setProductInfo(data);
    setLoading(false);
  }
  

  useMount(() => {
    fetchProduct(id)
  });

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleDelete = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };



  const { product_name, description, price, uuid } = productInfo?.data || {}

  const onFinish = async(values) => {
    const body = {
      product_name: values.productName,
      description: values.descriptionField,
      price: values.priceField
    }
    setIsFormOpen(false);
    setLoading(true);
    const { data, error } = await updateProduct(uuid, body)
    fetchProduct(id)
    setLoading(false);
  };

  const onDelete = async() => {
    setIsDeleteOpen(false);
    setLoading(true);
    await deleteProduct(uuid);
    notification.success({
          message: 'Success',
          description: 'Successfully deleted a product.',
          duration: 3,
      });
    setLoading(false);
    navigate('/product');
  }

  return (
    <div className="flex justify-center mt-xl md:flex-row gap-4">
      <div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-row gap-2">
            <div className="flex relative flex-col">
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="../src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="../src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="../src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="../src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="../src/assets/images/shirt2.png" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center px-md">
              <img src="../src/assets/images/shirt2.png" width={400} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-3/12">
        {
          loading ? <Skeleton loading={loading} /> : 
           <div className="text-left">
            <div className="flex justify-between items-center">
              <Text className="uppercase text-md text-left mt-md leading-normal block font-semibold mb-sm">
                { product_name }
              </Text>
              <div>
              <Button onClick={handleButtonClick}>
                  UPDATE
                </Button>
                <Button danger  className="mx-2"
                  onClick={handleDelete}
                >
                  DELETE
                </Button>
              </div>
            </div>
              <Text className="uppercase font-md text-sm text-left mt-md leading-normal">
                { description }
              </Text>
            </div>
        }

        
        <Text className="font-bold text-lg text-left mt-sm">{loading ? '' : `P ${price}`}</Text>
        <div className="w-full flex flex-col gap-4 mt-xl justify-between">
          <div className="flex justify-between">
            <Text className="uppercase text-xs font-semibold">
              Choose your size
            </Text>
            <Text className="uppercase text-xs underline">Size Guide</Text>
          </div>
          <div className="flex gap-x-2 items-center justify-center">
            <div
              className={classnames(
                "bg-transparent rounded px-6 py-2 border border-black-500 hover:border-black",
                selectedSize === "s" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("s")}
            >
              <Text className="uppercase font-bold text-lg">S</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-6 py-2 border border-black-500 hover:border-black",
                selectedSize === "m" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("m")}
            >
              <Text className="uppercase font-bold text-lg">M</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-6 py-2 border border-black-500 hover:border-black",
                selectedSize === "l" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("l")}
            >
              <Text className="uppercase font-bold text-lg">L</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-4 py-2 border border-black-500 hover:border-black",
                selectedSize === "xl" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("xl")}
            >
              <Text className="uppercase font-bold text-lg">XL</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-4 py-2 border border-black-500 hover:border-black",
                selectedSize === "2xl" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("2xl")}
            >
              <Text className="uppercase font-bold text-lg">2XL</Text>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="border-solid border border-black p-sm">
              <Text className="uppercase">Add to bag</Text>
            </div>
            <div className="border-solid border border-black p-sm bg-black">
              <Text className="uppercase text-white">Buy now</Text>
            </div>
          </div>
        </div>
      </div>
      <Modal title='Update Product' 
        open={isFormOpen}
        closable
        onCancel={() => setIsFormOpen(false)}
        footer={false}
        >
          <Form
          name="productForm"
          onFinish={onFinish}
          initialValues={{
            productName: product_name,
            descriptionField: description,
            priceField: price,
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
                Update
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Confirmation"
        open={isDeleteOpen}
        closable
        footer={false}
        destroyOnClose
        onCancel={() => setIsDeleteOpen(false)}
      >
        <p>Are you sure you want to delete?</p>
        <div className="flex gap-2">
              <Button type="secondary" className="text-black border-solid border border-gray-200 hover:bg-white"
                  onClick={() => setIsDeleteOpen(false)}>
                Cancel
              </Button>
              <Button loading={loading} 
                  type="primary" htmlType="submit" onClick={onDelete} className="text-black border-solid border border-gray-600 hover:bg-white">
                Ok
              </Button>
            </div>
      </Modal>
    </div>
  );
};

export default Product;
