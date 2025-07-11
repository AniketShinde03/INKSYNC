import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// Background Component
function Background() {
  return (
    <div className='fixed z-[2] w-full h-screen'>
      <div className='absolute top-[5%] w-full py-10 text-xl flex justify-center text-zinc-600 font-semibold'>
        My Notes
      </div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>
        InkSync
      </h1>
    </div>
  );
}

export default Background;