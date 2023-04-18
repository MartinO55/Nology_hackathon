import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CodeWars from "./Mac/CodeWars";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <CodeWars username={"xNapha"} />
        </div>
    );
}

export default App;
