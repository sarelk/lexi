import Head from 'next/head';
import { useState, useEffect } from "react";
import Step from "../components/Step";
import Verify from "../components/Verify";
import Home from "../components/Home";
import Lexi from "../components/Lexi";
import Loading from "../components/Loading";
import VerifyAll from "../components/VerifyAll";

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
  const char_age = [{"en":"One","he":"אחת"},{"en":"Two","he":"שתיים"},{"en":"Three","he":"שלוש"},{"en":"Four","he":"ארבע"},{"en":"Five","he":"חמש"},{"en":"Six","he":"שש"},{"en":"Seven","he":"שבע"},{"en":"Eight","he":"שמונה"},{"en":"Nine","he":"תשע"}]
  const char_clothes = [{"en":"Hat","he":"כובע"},{"en":"Dress","he":"שמלה"},{"en":"Pants","he":"מכנסיים"},{"en":"T-shirt","he":"חולצה"},{"en":"Sun-glasses","he":"משקפי שמש"},{"en":"Coat","he":"מעיל"},{"en":"Socks","he":"גרביים"},{"en":"Watch","he":"שעון"},{"en":"Shoes","he":"נעליים"}]
  useEffect(() => {
    setFormData({ ...formData, isTranslateHidden: true });
  }, [page])

  const componentList = [
    <Home
      page={page}
      key={0}
      setPage={setPage}
      x={x}
      setX={setX} />,
      <Lexi
      page={page}
      key={1}
      setPage={setPage}
      x={x}
      setX={setX}
      text="מה נעשה? ניצור לך דמות, וביחד תלמדו לדבר אנגלית" />,
      <Step
      key={2}
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
      key={3}
      valueToVerify={formData.charType}
      page={page}
      setPage={setPage}
      x={x}
    setX={setX}
    title="הדמות שלי היא?"
    progress={{ progress: "22%", title: "1 out of 8" }}
    />,
    <Step
    key={4}
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
      x={x}
      setX={setX}
      buttons={char_age}
      title="בת כמה הדמות?"
      progress={{ progress: "28%", title: "1 out of 8" }}
      valueToSave="charAge"
      />,
      <Verify
      key={5}
      valueToVerify={formData.charAge}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      title="בת כמה הדמות?"
      progress={{ progress: "34%", title: "1 out of 8" }}
      />,
      <Step
      key={6}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      buttons={char_clothes}
      title="מה הדמות לובשת?"
      progress={{ progress: "38%", title: "1 out of 8" }}
      valueToSave="charClothes"
    />,
      <Verify
      key={7}
      valueToVerify={formData.charClothes}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      title="מה הדמות לובשת?"
      progress={{ progress: "44%", title: "1 out of 8" }}
      />,
      <VerifyAll
      key={8}
      value={formData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      title="הדמות שלך"
      progress={{ progress: "50%", title: "1 out of 8" }}
      />,
      <Loading
      key={9}
      text={"מייצרים לך את הדמות"}
      formData={formData}
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