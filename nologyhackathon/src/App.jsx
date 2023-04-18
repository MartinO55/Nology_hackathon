<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Index from "./Nathan/Index";
function App() {
    const [count, setCount] = useState(0);

    return <div className="App"></div>;
=======
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
>>>>>>> 03b43da4e6273cfef917c1a3c852da4b7ce12496
import "./App.css";
import CodeWars from "./Mac/CodeWars";

function App() {
<<<<<<< HEAD
  return (
    <>
      <Github username={"xNapha"} />
    </>
  );
>>>>>>> 58ecd0b1dcf67ace174b4de62dccd06ba92d8cdc
=======
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <CodeWars username={"xNapha"} />
        </div>
    );
>>>>>>> 03b43da4e6273cfef917c1a3c852da4b7ce12496
}

export default App;
