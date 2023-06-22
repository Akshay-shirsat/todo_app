import React from "react";

function Rowdata(props) {
  return (
    <div className="list-item">
      {props.item}
      <button
        className="icons"
        onClick={(e) => {
          props.deleteItem(props.index);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Rowdata;
