// import React, { useState } from "react";

// let accordianStyle = {
//   color: "black",
//   backgroundColor: "white",
//   border: "1px solid black",
//   borderRadius: "10px",
// };

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "#262626",
  //   border: "1px solid black",
  //   borderRadius: "10px",
  // });

  // const [accordianStyle, setAccordianStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid black",
  //   borderRadius: "10px",
  // });

  // const [btnText, setBtnText] = useState("Enable dark mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid black",
  //       borderRadius: "10px",
  //     });
  //     setAccordianStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid black",
  //       borderRadius: "10px",
  //     });
  //     setBtnText("Enable dark mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#262626",
  //       border: "1px solid black",
  //       borderRadius: "10px",
  //     });
  //     setAccordianStyle({
  //       color: "white",
  //       backgroundColor: "#262626",
  //       border: "1px solid black",
  //       borderRadius: "10px",
  //     });
  //     setBtnText("Enable light mode");
  //   }
  // };

  return (
    <div
      className="container mt-4 "
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2>About Us</h2>
      <div className="accordion my-2" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              // style={myStyle}
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#262626" : "#f5f4f2",
              }}
            >
              Your Comprehensive Text Utility Hub
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#454443" : "white",
              }}
            >
              Unlock the full potential of your text with Textify – the ultimate
              destination for all your text manipulation needs. Whether you're a
              seasoned writer, a student working on an assignment, or simply
              looking to tidy up your documents, Textify offers an array of
              powerful tools to streamline your workflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              // style={myStyle}
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#262626" : "#f5f4f2",
              }}
            >
              Our Features:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#454443" : "white",
              }}
            >
              <strong>Convert to Uppercase & Lowercase:</strong> Instantly
              transform text to uppercase or lowercase with just a click. Say
              goodbye to manual retyping! <br />
              <br />
              <strong>Remove Extra Spaces:</strong> Clean up messy text by
              eliminating unnecessary spaces, ensuring your content looks
              polished and professional.
              <br />
              <br />
              <strong>Copy Text:</strong> Effortlessly copy text to your
              clipboard with our convenient copy feature, making it easy to
              transfer content wherever you need it.
              <br />
              <br />
              <strong>Listen to Your Text:</strong> Sit back and listen as
              Textify reads your text aloud, providing a convenient way to
              proofread or absorb content hands-free.
              <br />
              <br />
              <strong>Word Count & Character Count:</strong> Get precise word
              and character counts at your fingertips, helping you stay on track
              with document length requirements.
              <br />
              <br />
              <strong>Time to Read:</strong> Estimate the time it takes to read
              your text, perfect for presentations, speeches, or optimizing
              content for readability.
              <br />
              <br />
              <strong>More Features Coming Soon:</strong> We're constantly
              evolving to meet your needs. Stay tuned for exciting updates and
              new features on the horizon!
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              // style={myStyle}
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#262626" : "#f5f4f2",
              }}
            >
              Why Choose Textify:
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#454443" : "white",
              }}
            >
              <strong>Free to Use:</strong> Enjoy all our features at no cost.
              Textify is committed to providing accessible tools for everyone.
              <br />
              <br />
              <strong>Device Size Independent: </strong> Whether you're on a
              desktop, laptop, tablet, or smartphone, Textify adapts seamlessly
              to any screen size for a consistent user experience.
              <br />
              <br />
              <strong>Fast and Reliable:</strong> Experience lightning-fast
              performance and reliable results, ensuring efficiency in your text
              processing tasks.
              <br />
              <br />
              <strong>Privacy Assurance:</strong> Your privacy matters to us.
              Textify prioritizes the security and confidentiality of your data.
              <br />
              <br />
              <strong>All Browsers Compatible:</strong> Access Textify from your
              preferred web browser with ease. Our platform is optimized for
              compatibility across all major browsers.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              // style={myStyle}
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#262626" : "#f5f4f2",
              }}
            >
              How to Get Started:
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#454443" : "white",
              }}
            >
              Using Textify is simple and intuitive. Just visit our website,
              choose the tool you need, input your text, and let our powerful
              features take care of the rest. No downloads, no
              installations—just efficient text processing at your fingertips.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              // style={myStyle}
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#262626" : "#f5f4f2",
              }}
            >
              Join the Textify Community Today:
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#454443" : "white",
              }}
            >
              Thousands of users trust Textify for their text transformation
              needs. Join our growing community of writers, students, and
              professionals who rely on our tools to streamline their workflow
              and achieve their goals. Experience the convenience of text
              processing done right with Textify.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2 ">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
