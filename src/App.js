// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36383b";
      document.getElementById("displayModeSwitch").innerHTML =
        "Disable Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("displayModeSwitch").innerHTML =
        "Enable Dark Mode";
    }
  };
  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container" my-3="true">
        <TextForm
          heading="Enter the text to analyse below"
          mode={mode}
        ></TextForm>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
