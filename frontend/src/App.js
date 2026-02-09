import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Practice from "./Practice";
import ConfidentSpeaker from "./components/ConfidentSpeaker";
import TranslatorSection from "./components/TranslatorSection/index.js";
import MathSection from "./components/MathSection/index.js"
import PracticeFromImageSection from "./components/PracticeFromImageSection.jsx/index.js"

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route
          path="/practice/confident-speaker"
          element={<ConfidentSpeaker />}
        />

        <Route path="/practice/translator" element={<TranslatorSection />} />
        <Route path = "/practice/math" element = {<MathSection/>}/>
        <Route path = "/practice/image" element = {<PracticeFromImageSection/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
