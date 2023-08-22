import { motion } from "framer-motion";
import Progress from "./Progress";

const Step = ({ formData, setFormData, page, setPage, x, setX, buttons, title, progress, valueToSave }) => {

  const setChar = (e) => {
    setFormData({ ...formData, [valueToSave]: e.target.value });
    setPage(page + 1);
    setX(1000);
    e.target.blur()
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

      <div className="button-container">
        {buttons.map((button) => {
          return (
            <button value={button} cb={setChar} key={button} />
          )
        })}
      </div>
    </motion.div>
  );
};

export default Step;
