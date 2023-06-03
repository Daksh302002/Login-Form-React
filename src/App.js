import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="black";
    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  };

  return (
    <>
      <Navbar title="Gmail" toggleMode={toggleMode} mode={mode} />
      <div className="container">
        <TextForm toggleMode={toggleMode} mode={mode} ></TextForm>
      </div>
    </>
  );
}

export default App;
