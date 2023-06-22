import React, { useState } from "react";

function Inputdata(props) {
  const [text, setText] = useState("");
  const handler = (e) => {
    setText(e.target.value);
  };

  const addbtn = () => {
    props.method(text);
    setText("");
  };
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.method(text);
      setText("");
    }
  };

  return (
    <div div className="input-container">
      <input
        className="input-box-todo"
        onKeyDown={handleEnterPress}
        value={text}
        type="text"
        placeholder={"Entre your todo"}
        onChange={handler}
      />
      <button className="add-btn" onClick={addbtn}>
        +
      </button>
    </div>
  );
}

export default Inputdata;
