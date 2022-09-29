import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Login } from "./Components/Login-Register/Login";
import { Register } from "./Components/Login-Register/Register";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
