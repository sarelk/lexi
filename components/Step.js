import { motion } from "framer-motion";
import Progress from "./Progress";
import Image from 'next/image';

const Step = ({ formData, setFormData, page, setPage, x, setX, buttons, title, progress, valueToSave, verify }) => {

  const setChar = (button) => {
    setFormData({ ...formData, [valueToSave]: button });
    setPage(page + 1);
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
      <div className="button-container">
        {buttons.map((button) => {
          return (
            <button value={button.he} onClick={(e)=>setChar(button)} key={button.he} className="Animalbtn">{button.en}
            <Image src={`/buttons/${button.en}.svg`} height={42} width={42} alt={button.en}/></button>
          )
        })}
      </div>
    </motion.div>
  );
};

export default Step;
