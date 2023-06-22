import Inputdata from "./component/Inputdata";
import Rowdata from "./component/Rowdata";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const method = (text) => {
    if (text !== "") setTodo([...todo, text]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...todo];
    newListTodo.splice(key, 1);
    setTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <Inputdata method={method} />

        <h1 className="app-heading">TODO</h1>
        {todo.map((listItem, i) => {
          return (
            <Rowdata
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}
