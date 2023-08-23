import { motion } from "framer-motion";
import Progress from "./Progress";
import Image from 'next/image';

const Step = ({ valueToVerify, page, setPage, x, setX, title, progress }) => {
  const pageBack = () => {
    setPage(page - 1);
    setX(1000);
}


  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="card"
    >
      <Progress width={progress.progress} title={progress.title} page={page}
        setPage={setPage}
        x={x}
        setX={setX} />

      {title}
      <div className="verify-container">
        <Image src={`/buttons/${valueToVerify.en}.svg`} height={105} width={105} />
        <div className="flex justify-c f-column">
          <div className="verify-title">
            {valueToVerify.en}
          </div><br />
          <div>
            {valueToVerify.he}
          </div>
        </div>
      </div>
      <button className="continue">אני רוצה להמשיך</button><br/>
      <button onClick={(e)=>pageBack()} className="change">אני רוצה לשנות</button>
    </motion.div>
  );
};

export default Step;
