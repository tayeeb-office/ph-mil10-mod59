import React from 'react';
import { motion } from "framer-motion";
import logo from "../assets/Logo.png";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.img
        src={logo}
        alt="loading"
        className="w-[180px] h-[80px] md:w-[250px] md:h-[176px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Loading;
