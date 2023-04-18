import "./App.css";
import CodeWars from "./Mac/CodeWars";
import Header from "./Martin/Header/Header";
import Github from "./Martin/Github";

function App() {
  return (
    <div className="App">
      <Header username={"xNapha"} />
      <CodeWars username={"xNapha"} />
      <Github username={"xNapha"} />
    </div>
  );
}

export default App;
