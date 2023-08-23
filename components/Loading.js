import Image from 'next/image';
import { motion } from "framer-motion";
import lexi from "../assets/lexi.svg"
import { useState, useEffect } from 'react';

const Lexi = ({ formData, page, setPage, x, setX, cta, text }) => {
  const [imageOutput, setImageOutput] = useState('');

  const render = async () => {
    let type = formData.charType.en
    let age = formData.charAge.en
    let cloths = formData.charClothes.en
    
    console.log(type, age, cloths)
    const responseImage = await fetch('/api/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, age, cloths}),
    })
    
    const dataImage = await responseImage.json();
    const { outputImage } = dataImage;
    setImageOutput(`${outputImage}`);
  }

  useEffect((e)=>{
    render()
  },[])

  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="card no-border home home2"
    >
      <div className="container-home">
        <div className="">{text}</div>
        {!imageOutput && (
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        )}
        {imageOutput && (
            {imageOutput}
        )}
        <Image src={lexi} alt="Logo" className="lexi-bottom" />
      </div>
    </motion.div>
  );
};

export default Lexi;
