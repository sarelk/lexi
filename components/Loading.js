import Image from 'next/image';
import { motion } from "framer-motion";
import lexi from "../assets/lexi.svg"

const Lexi = ({ page, setPage, x, setX, cta, text }) => {
  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="card no-border home home2"
    >
      <div className="container-home">
        <div className="">{text}</div>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <Image src={lexi} alt="Logo" className="lexi-bottom" />
      </div>
    </motion.div>
  );
};

export default Lexi;
