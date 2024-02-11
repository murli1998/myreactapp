import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //  setText("god morning"); correct way to change text
  const handleUpClick = () => {
    if (text == "") {
      let checkmsg = new SpeechSynthesisUtterance("Please enter some text");
      speechSynthesis.speak(checkmsg);
    } else {
      console.log("Uppercase button was clicked");
      let newText = text.toUpperCase();
      setText(newText);
      let checkmsg = new SpeechSynthesisUtterance(
        "Text converted to uppercase"
      );
      speechSynthesis.speak(checkmsg);
    }
  };
  const handleLwClick = () => {
    if (text == "") {
      let checkmsg = new SpeechSynthesisUtterance("Please enter some text");
      speechSynthesis.speak(checkmsg);
    } else {
      console.log("Lowercase button was clickled");
      let newText = text.toLowerCase();
      setText(newText);
      let checkmsg = new SpeechSynthesisUtterance(
        "Text converted to lowercase"
      );
      speechSynthesis.speak(checkmsg);
    }
  };

  const handleOnChange = (event) => {
    console.log("handle on change");
    setText(event.target.value);
  };

  const textTospeech = () => {
    if (text == "") {
      let checkmsg = new SpeechSynthesisUtterance("Please enter some text");
      speechSynthesis.speak(checkmsg);
    } else {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = "en - IN";
      window.speechSynthesis.speak(msg);
    }
  };

  const handleClearClick = () => {
    if (text == "") {
      let checkmsg = new SpeechSynthesisUtterance("There's nothing to clear");
      speechSynthesis.speak(checkmsg);
    } else {
      let newText = "";
      setText(newText);
      let checkmsg = new SpeechSynthesisUtterance("All cleared");
      speechSynthesis.speak(checkmsg);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control border-secondary"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary m-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-success m-3" onClick={handleLwClick}>
            Convert to Lowercase
          </button>

          <button
            type="submit"
            onClick={textTospeech}
            className="btn btn-warning mx-2 my-2"
          >
            Speak
          </button>
          <button
            type="submit"
            onClick={handleClearClick}
            className="btn btn-warning mx-2 my-2"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container ">
        <h4 className="text-secondary">Your Text Summary : </h4>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>
          Time to read : {(0.008 * text.split(" ").length).toFixed(3)} minutes.
        </p>

        <h4 className="text-secondary">Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "This is heading",
};
