import "./App.css";
import NavBar from "./features/navBar/components/navBar.js";
import { BrowserRouter } from "react-router-dom";
import Navs from "./features/body/components/navs";

function App() {
  return (
    <BrowserRouter>
      <div className="App h-full">
        <NavBar />
        <Navs />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
