import Image from 'next/image';
import charAudio from '../public/audio.png'

const MsgAudio = (props) => {
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
    return (
          <Image src={charAudio} alt="listen" onClick={() => toSpeak(props.msg, props.lang, props.voice)} />
    )
}

export default MsgAudio;