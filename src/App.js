import "./App.css";
import NavBar from "./features/navBar/components/navBar.js";
import { BrowserRouter } from "react-router-dom";
import Navs from "./features/body/components/navs";
import Counter from "./features/body/components/counter";
import AddPage from "./features/adminPanel/components/addPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Navs />
        <Counter />
        <AddPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
