import Image from 'next/image';
import { motion } from "framer-motion";
import camilio from "../assets/layout/camilio.svg"
import arrow from "../assets/layout/arrow.svg"

const Home = ({ page, setPage, x, setX, isUnicorn, isSeal }) => {
  const subTitle = isUnicorn ? " Create your own Unicorn 🦄 " : isSeal ? "Create your own sea seal🦭" : "Create.Explore.Learn"
  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="card no-border home"
    >
      <div>
        <div className="home-title">Chameleon.AI</div>
        <div className="home-sub-title">{subTitle}</div>
      </div>

      <Image src={camilio} alt="Logo" />

      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        <Image src={arrow} alt="Next" />
      </button>
    </motion.div>
  );
};

export default Home;
