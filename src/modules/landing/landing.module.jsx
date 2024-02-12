import React, { useEffect, useState } from "react";
import styles from "./landing.module.scss";
import { OutlineLogo } from "../../assets";
import { OutlineWhiteLogo } from "../../assets";
import useMount from "../../hooks/useMount";
import Lottie from "lottie-react";
import animationData from "../../assets/outline-lottie3.json";
import { useRef } from "react";

const Landing = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useMount(() => {
    // add delay of 5 seconds here
    const delay = 2800; // 5 seconds in milliseconds

    const timeoutId = setTimeout(() => {
      setCollapsed(true);
    }, delay);

    return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout if the component unmounts
  });

  return (
    <div className="h-full">
      <header
        className={collapsed ? styles["curtain-menu"] : styles["menu-open"]}
      >
        <div className="flex items-center justify-center h-fit w-fit border">
          <Lottie animationData={animationData} loop={false} />
        </div>
      </header>
      <main className="flex-grow"></main>
      <div className="-mt-36 h-screen">
        <OutlineLogo width="100%" height="100%" style={{ fill: "blue" }} />
      </div>
    </div>
  );
};

export default Landing;
