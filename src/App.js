import "./App.css";
import Counter from "./features/body/components/counter.js";
import NavBar from "./features/navBar/components/navBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Counter />
    </div>
  );
}

export default App;
