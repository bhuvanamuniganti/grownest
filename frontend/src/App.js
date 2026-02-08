import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Practice from "./Practice";
import ConfidentSpeaker from "./components/ConfidentSpeaker";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
