import Image from 'next/image';
import { motion } from "framer-motion";
import camilio from "../assets/layout/camilio.svg"
import arrow from "../assets/layout/arrow.svg"
import Progress from './Progress';

const Camilio = ({ page, setPage, x, setX, cta, text }) => {
  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="card no-border home home2"
    >
      <Progress page={page}
        setPage={setPage}
        x={x}
        setX={setX} 
        onlyBack={true}/>
      <div className="container-home">
        <div className="caption-text">{text}</div>
        <Image src={camilio} alt="Logo" className="small-camilio" />
      </div>

      <button
      className={`${cta ? "minw320" : ""}`}
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        {cta && (
          <span>{cta}</span>
        )}
        <Image src={arrow} alt="Next" />
      </button>
    </motion.div>
  );
};

export default Camilio;
