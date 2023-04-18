import "./App.css";

import CodeWars from "./Mac/CodeWars";
import CodewarsCont from "./Containers/CodewarsCont/CodewarsCont";

import Header from "./Martin/Header/Header";
import Github from "./Martin/Github";

function App() {
  return (
    <div className="App">
      <Header username={"xNapha"} />
      <CodeWars username={"xNapha"} />
       <CodewarsCont />
      <Github username={"xNapha"} />
      
    </div>
  );



export default App;
