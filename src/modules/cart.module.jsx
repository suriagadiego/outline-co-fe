import React from "react";
import { Typography, Divider, Dropdown, Space, Select, Input } from "antd";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import { Button } from "../components";
const { Link, Text } = Typography;
const Cart = () => {
  const products = [
    {
      title: "Loathe Mediocrity Tee",
      subtitle: "Subtitle 1",
      description: "Description 1",
      price: "2,999.00",
    },
    {
      title: "Transcend the Mundane Hoodie",
      subtitle: "Subtitle 2",
      description: "Description 2",
      price: "2,999.00",
    },
    {
      title: "Cock Ring",
      subtitle: "Subtitle 3",
      description: "Description 3",
      price: "2,999.00",
    },
  ];

  return (
    <div className="text-left p-2 m-10 w-4/5 mx-auto">
      <div className="flex ">
        <div className="flex-col w-8/12 p-2 m-2">
          <h1 className="text-3xl font-bold">Bag</h1>
          {products.map((product, index) => (
            <div>
              <div className="flex">
                <div className="w-40 h-40 p-2 m-2">
                  <img src="src/assets/images/shirt2.png" />
                </div>
                <div className="h-40 flex flex-col grow text-left p-2 m-2">
                  <Text className="font-bold">{product.title}</Text>
                  <Text>{product.subtitle}</Text>
                  <Text>Product Description</Text>
                  <div className="flex items-center gap-2 mr-2 ">
                    <Text>Size</Text>
                    <Select
                      defaultValue="S"
                      bordered={false}
                      options={[
                        {
                          value: "small",
                          label: "S",
                        },
                        {
                          value: "medium",
                          label: "M",
                        },
                        {
                          value: "large",
                          label: "L",
                        },
                      ]}
                    />
                    <Text>Quantity</Text>
                    <Text className="font-medium">2</Text>
                  </div>
                  <div>
                    <HeartOutlined />
                    <DeleteOutlined />
                  </div>
                </div>
                <div className="w-40 h-40 p-2 m-2">
                  <Text className="font-bold">₱{product.price}</Text>
                </div>
              </div>
              {products.length - 1 !== index ? <Divider /> : null}
            </div>
          ))}
        </div>
        <div className="w-4/12 p-2 m-2">
          <h1 className="text-3xl font-bold">Summary</h1>
          <div>
            <div className="flex justify-between">
              <Text className="text-left">Subtotal</Text>
              <Text className="ml-auto font-medium">₱20,000</Text>
            </div>
            <div className="flex justify-between">
              <Text className="text-left">Delivery/Handling Fee</Text>
              <Text className="ml-auto">Free</Text>
            </div>
            <Divider />
            <Input
              placeholder="Membership Card Number"
              className="border-solid border border-black p-sm rounded-none bg-[whitesmoke] focus:bg-white text-center"
            />
            <Divider />
            <div className="flex justify-between">
              <Text className="text-left">Total</Text>
              <Text className="text-right font-bold">₱20,000</Text>
            </div>
            <Divider />
            <Button type="primary" label="Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
