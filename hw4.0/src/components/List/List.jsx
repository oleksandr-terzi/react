import React from "react";
import "./styles.scss";

export default function List({ list, setList, todoTheme }) {
  const removeItem = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId);
    setList(updatedList);
  };

  const completeItem = (itemId) => {
    const updatedList = list.map((item) =>
      item.id === itemId ? { ...item, completed: true } : item
    );
    setList(updatedList);
  };

  return (
    <div className="container">
      <table className={todoTheme}>
        <thead>
          <tr>
            <td>Task</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, title, completed }) => (
            <tr key={id}>
              <td
                className={completed ? "list-title--red" : "list-title--green"}
              >
                {title}
              </td>
              <td>
                {completed ? (
                  <button onClick={() => removeItem(id)}>Delete</button>
                ) : (
                  <button onClick={() => completeItem(id)}>Complete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
