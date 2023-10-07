import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";
// import "./App.css";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="w-full">
      {/* <Header></Header>
      // <Homepage />
       <Footer></Footer> */}
      <ChatPage />
    </div>
  );
}

export default App;
