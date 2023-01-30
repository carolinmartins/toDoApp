import "./App.css";
import { useState } from "react";

function App() {
  const [content, setContent] = useState(""); //for what will be written by the user
  const [list, setList] = useState([]); //for what we'll be adding

  const addNewToDo = () => {
    const newList = list.concat({ name: content, done: false });
    setList(newList);

    setContent("");
  };

  const handleKeyDown = (event) => {
    //track input field's state
    if (event.code === "Enter") addNewToDo();
  };

  const handleToogleItem = (item) => {
    const newItem = { ...item, done: !item.done };
    const newList = list.map((i) => {
      if (i !== item) return i;
      else return newItem;
    });
    setList(newList);
  };

  const deleteItem = (byeItems) => {
    const newList = list.filter((listedITem) => listedITem !== byeItems);

    setList(newList);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <ul>
        <div>
          {list.map(
            (
              feijao //this is the name that you're giving to this parameter that will be used
            ) => (
              <li className="individualItem" key={feijao.name}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={feijao.done}
                  onChange={() => handleToogleItem(feijao)}
                />
                <label>{feijao.name}</label>
                <button
                  className="deleteButton"
                  onClick={() => deleteItem(feijao)}
                >
                  Delete
                </button>
              </li>
            )
          )}
        </div>
      </ul>

      <div className="newField">
        <input
          placeholder="What's on your mind"
          value={content}
          type="text"
          onChange={(event) => setContent(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="addButton" onClick={addNewToDo}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
