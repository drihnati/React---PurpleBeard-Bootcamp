import React from 'react'
import { motion } from "framer-motion"


import _NavBarHW from './_NavBarHW';

  function HomeWork1() {
  return (
    <div className='app-container'>
      <_NavBarHW />
      <div className="content" >
        <motion.div
          drag
          className="square"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />  
      </div>
    </div>
  );
}

export default HomeWork1; 