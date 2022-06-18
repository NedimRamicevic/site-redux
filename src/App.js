import "./App.css";
import Counter from "./features/body/components/counter.js";
import NavBar from "./features/navBar/components/navBar.js";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" exact component={Counter} />
          <Route path="/about" exact component={Counter} />
          <Route path="/contact" exact component={Counter} />
        </Routes>
        <Counter />
      </div>
    </BrowserRouter>
  );
}

export default App;
