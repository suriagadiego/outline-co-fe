import React from "react";
import { Typography, Divider } from "antd";
import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Link, Text } = Typography;

const Home = () => {
  return (
    <div className="flex justify-center mt-xl flex-col md:flex-row gap-4">
      <div className="flex flex-col w-3/4 self-center md:w-1/4">
        <Text className="uppercase font-bold text-lg text-left">
          Lorem Ipsum
        </Text>
        <Text className="uppercase font-md text-sm text-left mt-md leading-normal">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        <Text className="font-bold text-lg text-left mt-sm md:mt-xl">P800</Text>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <img src="src/assets/images/shirt2.png" width={400} />
        </div>
        <div className="border-solid border border-black p-sm w-1/2">
          <Text className="uppercase">Add to cart</Text>
        </div>
      </div>
      <div className="flex flex-col w-3/4 self-center md:w-1/4">
        <Text className="uppercase text-xs">Choose your size</Text>
        <div className="mt-md">
          <Text className="uppercase font-bold text-lg">S</Text>
          <Divider type="vertical" className="mx-lg" />
          <Text className="uppercase font-bold text-lg">M</Text>
          <Divider type="vertical" className="mx-lg" />
          <Text className="uppercase font-bold text-lg">L</Text>
          <Divider type="vertical" className="mx-lg" />
          <Text className="uppercase font-bold text-lg">XL</Text>
        </div>
      </div>
    </div>
  );
};

export default Home;
