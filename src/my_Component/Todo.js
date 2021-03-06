import React from "react";
import { useState } from "react";

export default function Todo(props) {
 
  const [text, setText] = useState("This is text area");

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleDelete = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleRmovespace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div >
      <h1 className="titleHead">{props.title}</h1>

      <textarea
        name="Todo"
        value={text}
        onChange={handleonChange}
        cols="50"
        rows="5"
        className="contain"
        // className="texta"
        id="Mybox"
      ></textarea>
      <div className="container">
        <button className="btn" onClick={handleupClick}>
          Uppercase
        </button>
        <button className="btn" onClick={handleDownClick}>
          Lowercase
        </button>
        <button className="btn" onClick={handleDelete}>
          Clear
        </button>
        <button className="btn" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn" onClick={handleRmovespace}>
          Remove Spaces
        </button>
      </div>
      <div className="container mx-12 my-5">
        <h2 className="m-2 text-xl font-semibold">Your Text Summery</h2>
        <p className="">
          {text.split(" ").length - 1} word and {text.length} charactor
        </p>
        <h2 className="text-xl font-semibold mt-5 justify-center">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
