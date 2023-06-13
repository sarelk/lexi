import Head from 'next/head';
import { useState, useEffect } from "react";
import Step from "../components/Step";
import Home from "../components/Home";
import Camilio from "../components/Camilio";

function App(props) {
  const [page, setPage] = useState(0);
  const [x, setX] = useState(0);
  const [formData, setFormData] = useState({
    studentName: "",
    charType: "",
    charAge: "",
    charClothes: "",
  });

  const char_types = ["race car driver","tiger", "chameleon", "avocado", "cat", "ice cream", "dog", "duck", "elephant", "sloth", "giraffe", "lion", "cow", "doughnut", "pizza", "teddy bear", "penguin", "squirrel", "robot", "snowman", "sheep", "chocolate chip cookie", "butterfly", "unicorn", "rabbit"]
  const char_age = ["baby", "child", "teenager", "adult"]
  const char_professions = ["chef", "baker", "clown", "prince", "astronaut", "dancer", "gamer", "teacher", "student", "pilot", "musician", "librarian", "policeman", "fireman", "magician", "king", "queen", "singer", "painter", "farmer", "nurse", "artist"]
  const char_adjectives = ["tall", "young", "little", "strong", "thin", "small", "cute", "happy", "sad", "angry", "excited", "powerful", "funny", "in love", "bored", "joyful", "hopeful", "energized", "amused", "optimistic", "blessed"]
  const char_mood = ["happy", "sad", "angry", "excited", "powerful", "in love", "bored", "joyful", "hopeful", "energized", "amused", "optimistic", "blessed"]
  const char_clothes = ["hat", "bandanna", "beret", "T-shirt", "tank top", "hoodie", "coat", "armor", "sunglasses", "glasses", "jacket", "christmas sweater", "necklace", "golden earrings", "cape"]

  useEffect(() => {
    setFormData({ ...formData, isTranslateHidden: true });
  }, [page])

  const componentList = [
    <Home
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      isUnicorn={isUnicorn}
      isSeal={isSeal} />,
    <Camilio
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      text="Hey! I’m Camilo.
      Colorful English tutor." />,
    <Step
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      buttons={char_types}
      title="Your character is a/an..."
      progress={{progress:"14%",title:"1 out of 8"}}
      valueToSave="charType"
    />,
  ];
  return (
    <div className="App">
      <Head>
        <title>Lexi AI</title>
      </Head>
      <div className="body">{componentList[page]}</div>
    </div>
  );
}

export default App;