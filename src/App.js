import React, { useState } from "react";
import "./styles.css";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordCount() {
    let textArray = text.trim().split(" ");
    return textArray.length === 1 ? 0 : textArray.length;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button onClick={wordCount}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
