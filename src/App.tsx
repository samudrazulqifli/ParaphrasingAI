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
