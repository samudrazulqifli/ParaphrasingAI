import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import "./App.css";
import Homepage from "./pages/Homepage";

function App() {

  return (
    <div className="w-full">
      <Header></Header>
      <Homepage />
       <Footer></Footer>
    </div>

  );
}

export default App;
