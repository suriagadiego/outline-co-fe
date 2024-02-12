import React from "react";
import { Typography } from "antd";
import classnames from "classnames";
const { Link, Text } = Typography;

const Button = ({ type = "primary", label, className }) => {
  return (
    <div
      className={classnames(
        "border-solid border border-black p-sm text-center",
        className,
        { "bg-black": type === "primary" }
      )}
    >
      <Text
        className={classnames("uppercase", {
          "text-white": type === "primary",
        })}
      >
        {label}
      </Text>
    </div>
  );
};

export default Button;
