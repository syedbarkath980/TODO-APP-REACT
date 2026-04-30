import React, { use, useEffect, useState } from "react";

const App = () => {
  const [initial, setInitial] = useState("");
  const [list, setList] = useState(() => {
    // Loads data from local storage when page re-reloads:
    const storage = localStorage.getItem("list");
    return storage ? JSON.parse(storage) : [];
  });

  useEffect(() => {
    // Stores the data inside localStorage using a key called as list:
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleAddBtn = () => {
    let storePrevious = [...list, initial];
    setList(storePrevious);
    setInitial("");
  };

  // Filter Removes an element if the condition is false
  const handleDeleteBtn = (index) => {
    const deledtedList = list.filter((currElem, id) => {
      return id != index;
    });
    setList(deledtedList);
  };

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
            <input type="checkbox" />
            {task}{" "}
            <button onClick={() => handleDeleteBtn(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
