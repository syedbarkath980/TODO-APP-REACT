import React, { useState } from "react";

const App = () => {
  const [initial, setInitial] = useState("");
  const [list, setList] = useState([]);

  const handleAddBtn = () => {
    let storePrevious = [...list, initial];
    setList(storePrevious);
    setInitial("");
  };

  const handleDeleteBtn = (index) => {
    const deledtedList = list.filter((currElem, id) => {
      return id != index;
    });
    setList(deledtedList);
  };

  // const handleOnchange = (index) => {
  //   const strikedList = list.map((i, item) => {
  //     item[i].style = {"strikethrough"}
  //   })
  // }

  return (
    <div>
      {/* Taking the input from the user and storing it initial*/}
      <input
        type="text"
        placeholder="Enter Task..."
        value={initial}
        onChange={(e) => {
          setInitial(e.target.value);
        }}
      />
      <button onClick={handleAddBtn}>Add</button>

      <ul>
        {list.map((task, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => handleOnchange(index)} />
            {task}{" "}
            <button onClick={() => handleDeleteBtn(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
