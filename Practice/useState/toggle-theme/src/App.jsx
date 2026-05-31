import { useState } from "react";
import "./App.css";

function App() {
  const [darkmode, setdarkmode] = useState(false);

  const handletoggle = () => {
    setdarkmode(!darkmode);
  };

  return (
    <div
      style={{
        backgroundColor: darkmode ? "#222" : "#fff",
        color: darkmode ? "#fff" : "#000",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>
        {darkmode ? " Dark Mode" : " Light Mode"}
      </h1>

      <button onClick={handletoggle}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;