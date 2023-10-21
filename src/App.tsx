import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainContent";
import LandingModal from "./components/modal/LandingModal";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full relative">  
      <LandingModal showModal={open} setShowModal={setOpen} />
      <MainPage></MainPage>
    </div>
  );
}

export default App;
