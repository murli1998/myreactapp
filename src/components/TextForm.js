import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //  setText("good morning"); correct way to change text
  const handleUpClick = () => {
    if (text === "") {
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
      props.showAlert("Text converted to uppercase", "success");
    }
  };
  const handleLwClick = () => {
    if (text === "") {
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
      props.showAlert("Text converted to lowercase", "success");
    }
  };

  const handleOnChange = (event) => {
    console.log("handle on change");
    setText(event.target.value);
  };

  const textTospeech = () => {
    if (text === "") {
      let checkmsg = new SpeechSynthesisUtterance("Please enter some text");
      speechSynthesis.speak(checkmsg);
    } else {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
  };

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
    let checkmsg = new SpeechSynthesisUtterance("Extra spaces removed");
    speechSynthesis.speak(checkmsg);
  };

  const copyText = () => {
    if (text === "") {
      let checkmsg = new SpeechSynthesisUtterance("There's nothing to copy");
      speechSynthesis.speak(checkmsg);
    } else {
      navigator.clipboard.writeText(text);
      let checkmsg = new SpeechSynthesisUtterance(
        "Text copied, you can paste it whereever you want"
      );
      speechSynthesis.speak(checkmsg);
      props.showAlert("Text copied", "success");
    }
  };

  const handleClearClick = () => {
    if (text === "") {
      let checkmsg = new SpeechSynthesisUtterance("There's nothing to clear");
      speechSynthesis.speak(checkmsg);
    } else {
      let newText = "";
      setText(newText);
      let checkmsg = new SpeechSynthesisUtterance("All cleared");
      speechSynthesis.speak(checkmsg);
      props.showAlert("All cleared", "success");
    }
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control border-secondary"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#5e6166" : "#f5f4f2",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleUpClick}
            disabled={text.trim().length < 1}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-success mx-2 my-2"
            onClick={handleLwClick}
            disabled={text.trim().length < 1}
          >
            Convert to Lowercase
          </button>

          <button
            type="submit"
            onClick={removeExtraSpace}
            className="btn btn-warning mx-2 my-2"
            disabled={text.trim().length < 1}
          >
            Remove Extra Space
          </button>

          <button
            type="submit"
            onClick={copyText}
            className="btn btn-secondary mx-2 my-2"
            disabled={text.trim().length < 1}
          >
            Copy Text
          </button>
          <button
            type="submit"
            onClick={textTospeech}
            className="btn btn-info mx-2 my-2"
            disabled={text.trim().length < 1}
          >
            Speak
          </button>
          <button
            type="submit"
            onClick={handleClearClick}
            className="btn btn-danger mx-2 my-2"
            disabled={text.trim().length < 1}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "#b6babf" : "#6d6f73" }}
      >
        <h4 style={{ color: props.mode === "dark" ? "#cbcfd4" : "#6d6f73" }}>
          Your Text Summary :{" "}
        </h4>
        <p>
          {
            text.split(/\s+/).filter((Element) => {
              return Element.length !== 0;
            }).length
          }{" "}
          Words and {text.trim().length} Characters
        </p>
        <p>
          Time to read :{" "}
          {(
            0.008 *
            text.split(" ").filter((Element) => {
              return Element.length !== 0;
            }).length
          ).toFixed(3)}{" "}
          minutes.
        </p>

        <h4 style={{ color: props.mode === "dark" ? "#cbcfd4" : "#6d6f73" }}>
          Preview
        </h4>
        <p>
          {text.split(" ").filter((Element) => {
            return Element.length !== 0;
          }).length > 0
            ? text
            : "Enter some text above to preview it here...."}
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "This is heading",
};
