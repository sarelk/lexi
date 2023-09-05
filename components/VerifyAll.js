import { motion } from "framer-motion";
import Progress from "./Progress";
import Image from 'next/image';
import Audio from './Audio'

const Step = ({ value, page, setPage, x, setX, title, progress }) => {
  const pageBack = () => {
    setPage(2);
    setX(1000);
}
  const nextPage = () => {
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
      <div className="verify-container flex gap20">
        <Image src={`/buttons/${value.charType.en}.svg`} height={61} width={61} alt={value.charType.en}/>
        <div className="flex justify-c f-column">
          <div className="verify-title">
            {value.charType.en}
            <Audio msg={value.charType.en} lang={"en-US"} voice={"Google US English"}/>
          </div><br />
          <div>
            {value.charType.he}
          </div>
        </div>
      </div>
      <div className="verify-container flex gap20">
        <Image src={`/buttons/${value.charAge.en}.svg`} height={61} width={61} alt={value.charAge.en}/>
        <div className="flex justify-c f-column">
          <div className="verify-title">
            {value.charAge.en}
            <Audio msg={value.charAge.en} lang={"en-US"} voice={"Google US English"}/>
          </div><br />
          <div>
            {value.charAge.he}
          </div>
        </div>
      </div>
      <div className="verify-container flex gap20">
        <Image src={`/buttons/${value.charClothes.en}.svg`} height={61} width={61} alt={value.charClothes.en}/>
        <div className="flex justify-c f-column">
          <div className="verify-title">
            {value.charClothes.en}
            <Audio msg={value.charClothes.en} lang={"en-US"} voice={"Google US English"}/>
          </div><br />
          <div>
            {value.charClothes.he}
          </div>
        </div>
      </div>
      <button  onClick={(e)=>nextPage()} className="continue">אני בטוח</button><br/>
      <button onClick={(e)=>pageBack()} className="change">אני רוצה לשנות</button>
    </motion.div>
  );
};

export default Step;
