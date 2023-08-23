import Head from 'next/head';
import { useState, useEffect } from "react";
import Step from "../components/Step";
import Verify from "../components/Verify";
import Home from "../components/Home";
import Lexi from "../components/Lexi";

function App(props) {
  const [page, setPage] = useState(0);
  const [x, setX] = useState(0);
  const [formData, setFormData] = useState({
    studentName: "",
    charType: "",
    charAge: "",
    charClothes: "",
  });

  const char_types = [{ "en": "Cat", "he": "חתול" }, { "en": "Dog", "he": "כלב" }, { "en": "Duck", "he": "ברווז" }, { "en": "Frog", "he": "צפרדע" }, { "en": "Fish", "he": "דג" }, { "en": "Elephant", "he": "פיל" }, { "en": "Unicorn", "he": "חד קרן" }, { "en": "Monkey", "he": "קוף" }, { "en": "Lion", "he": "אריה" }]
  useEffect(() => {
    setFormData({ ...formData, isTranslateHidden: true });
  }, [page])

  const componentList = [
    <Home
      page={page}
      setPage={setPage}
      x={x}
      setX={setX} />,
    <Lexi
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      text="מה נעשה? ניצור לך דמות, וביחד תלמדו לדבר אנגלית" />,
    <Step
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      buttons={char_types}
      title="הדמות שלי היא?"
      progress={{ progress: "14%", title: "1 out of 8" }}
      valueToSave="charType"
    />,
    <Verify
      valueToVerify={formData.charType}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      title="הדמות שלי היא?"
      progress={{ progress: "22%", title: "1 out of 8" }}
    />
  ];
  return (
    <div className="App">
      <Head>
        <title>Lexi</title>
      </Head>
      <div className="body">
        {componentList[page]}</div>
    </div>
  );
}

export default App;