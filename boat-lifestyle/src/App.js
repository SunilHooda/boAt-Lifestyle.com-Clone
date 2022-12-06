import "./App.css";
import Footer from "./Components/Footer/Footer";
//import { Navbar } from "./Components/Navbar/Navbar";
import Navbar from "./Components/Navbar/boatNavbar";
import { AllRoutes } from "./Components/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
