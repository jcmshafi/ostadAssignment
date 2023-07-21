import { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");

  // handle form
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.userInput.value;
    setText(value);
    e.target.userInput.value = "";
  };
  return (
    <div className="form-area">
      <form onSubmit={handleSubmit}>
        <textarea
          name="userInput"
          cols="30"
          rows="10"
          placeholder="Text here..."
        ></textarea>
        <button className="btn">submit</button>
      </form>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Content;