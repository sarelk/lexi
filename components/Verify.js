import { motion } from "framer-motion";
import Progress from "./Progress";
import Image from 'next/image';
import Audio from './Audio'

const Step = ({ valueToVerify, page, setPage, x, setX, title, progress }) => {
  const synth = (window && window.speechSynthesis) ? window.speechSynthesis: null;
  const toSpeak = (paragrpah, lang, voice) => {
      speak(paragrpah, lang, voice)
  }
  let voices = synth.getVoices();

  const speak = (read, lang, voice) => {
      if (synth.speaking) {
          console.error("speechSynthesis.speaking");
          return;
      }

      if (read !== "") {
          const utterThis = new SpeechSynthesisUtterance(read);

          utterThis.onend = function (event) {
              console.log("SpeechSynthesisUtterance.onend");
          };

          utterThis.onerror = function (event) {
              console.error("SpeechSynthesisUtterance.onerror");
          };

          const selectedOption = voice
          // voiceSelect.selectedOptions[0].getAttribute("data-name");

          for (let i = 0; i < voices.length; i++) {
              if (voices[i].name === selectedOption) {
                  utterThis.voice = voices[i];
                  break;
              }
          }
          utterThis.lang = "he-IL"
          utterThis.pitch = '1';
          utterThis.rate = '1';
          synth.speak(utterThis);
      }
  }
  const pageBack = () => {
    setPage(page - 1);
    setX(1000);
}
  const nextPage = () => {
    toSpeak(valueToVerify.he,"he-IL","Carmit")
    setTimeout(()=>{
      toSpeak(valueToVerify.en,"en-US","Google US English")
    },1500)
    setTimeout(()=>{
      setPage(page + 1);
      setX(1500);
    },3000)
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
        <Image src={`/buttons/${valueToVerify.en}.svg`} height={105} width={105} alt={valueToVerify.en}/>
        <div className="flex justify-c f-column">
          <div className="verify-title">
            {valueToVerify.en}
            {/* <Audio msg={valueToVerify.he} lang={"he-IL"} voice={"Carmit"}/> */}
            <Audio msg={valueToVerify.en} lang={"en-US"} voice={"Google US English"}/>
          </div><br />
          <div>
            {valueToVerify.he}
          </div>
        </div>
      </div>
      <button  onClick={(e)=>nextPage()} className="continue">אני רוצה להמשיך</button><br/>
      <button onClick={(e)=>pageBack()} className="change">אני רוצה לשנות</button>
    </motion.div>
  );
};

export default Step;
