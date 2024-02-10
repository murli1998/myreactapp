import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //  setText("god morning"); correct way to change text
  const handleUpClick = () => {
    console.log("Uppercase button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLwClick = () => {
    console.log("Lowercase button was clickled");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("handle on change");
    setText(event.target.value);
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
          <button className="btn btn-secondary m-3" onClick={handleUpClick}>
            Covert to Uppercase
          </button>
          <button className="btn btn-success m-3" onClick={handleLwClick}>
            Covert to Lowercase
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your Text Summary : </h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>
          Time to read : {0.008 * text.split(" ").length.toFixed(3)} minutes.
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "This is heading",
};
