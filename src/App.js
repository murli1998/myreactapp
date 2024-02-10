// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container" my-3="true">
        <TextForm heading="Enter the text to analyse below"></TextForm>
      </div>
    </>
  );
}

export default App;
