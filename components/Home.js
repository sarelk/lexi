import Image from 'next/image';
import { motion } from "framer-motion";
import logo from "../assets/logo.svg"
import lexi from "../assets/layout/lexi.png"

const Home = ({ page, setPage, x, setX, isUnicorn, isSeal }) => {
  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="card no-border home"
    >
      <div>
        <div className="home-title">
          <Image src={logo} alt="Lexi" />
        </div>
        <div className="home-sub-title">היי! אני לקסי,
מוכנים ללמוד אנגלית?</div>
      </div>

      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        בואו נתחיל!
      </button>
      <div className='lexi-bottom'>
      <Image src={lexi} alt="Lexi" />
      </div>

    </motion.div>
  );
};

export default Home;
