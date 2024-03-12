'use client';
import React from 'react';
import { motion, useInView, useAnimation, useIsPresent  } from "framer-motion";
import { useEffect, useRef } from "react";
import { poppins } from '../ui/fonts';


export default function Agriculture(){

    

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const viewAnimation = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=> {
        if (isInView){
          viewAnimation.start("visible");
          slideControls.start("visible");
        }
        }, [isInView])


    return(
        <>  
        <div ref={ref}>

<motion.div
 variants={{
    hidden: {opacity: 0, y: 75},
    visible: {opacity: 1, y:0},
  }}
  initial="hidden"
  animate={viewAnimation}
  transition={{duration: 0.5, delay: 0.25}}

>

<h1 className={`${poppins.className}antialiased text-white text-xl`}>I have phimosis</h1>

</motion.div>

        </div>
        
        </>


    )

}