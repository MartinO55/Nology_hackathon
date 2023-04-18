import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CodeWars from "./Mac/CodeWars";
import CodewarsCont from "./Containers/CodewarsCont/CodewarsCont";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <CodewarsCont />
        </div>
    );
}

export default App;
