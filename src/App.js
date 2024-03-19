// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36383b";
      document.getElementById("displayModeSwitch").innerHTML =
        "Disable Dark Mode";
      showAlert("Dark Mode Enabled", "success");
      let checkmsg = new SpeechSynthesisUtterance("Dark Mode Enabled");
      speechSynthesis.speak(checkmsg);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("displayModeSwitch").innerHTML =
        "Enable Dark Mode";
      showAlert("Light Mode Enabled", "success");
      let checkmsg = new SpeechSynthesisUtterance("Light Mode Enabled");
      speechSynthesis.speak(checkmsg);
    }
  };
  const [mode, setMode] = useState("light");
  return (
    <>
      <Router>
        <Navbar
          title="Textify"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container" my-3="true">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
