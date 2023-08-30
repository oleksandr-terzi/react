import React from "react";

export default function Statistics({ list }) {
  const completedTasks = list.filter((item) => item.completed !== false);
  const inProgressTasks = list.length - completedTasks.length;

  return (
    <div>
      <ul>
        <li>All tasks: {list.length}</li>
        <li>Completed tasks: {completedTasks.length}</li>
        <li>In progress tasks: {inProgressTasks}</li>
      </ul>
    </div>
  );
}
