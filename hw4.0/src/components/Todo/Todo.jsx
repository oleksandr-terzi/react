import React, { useState } from "react";
import List from "../List/List";
import Statistics from "../Statistics/Statistics";
import ThemeMode from "../ThemeMode/ThemeMode";

export default function Todo() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "learn react",
      completed: false,
    },
    {
      id: 2,
      title: "learn js",
      completed: false,
    },
    {
      id: 3,
      title: "learn html",
      completed: false,
    },
    {
      id: 4,
      title: "learn css",
      completed: false,
    },
    {
      id: 5,
      title: "learn vue",
      completed: false,
    },
    {
      id: 6,
      title: "lxexonexowjeoiwdjoiewjd",
      completed: false,
    },
  ]);

  const [todoTheme, setTodoTheme] = useState("light");

  const getTheme = (value) => setTodoTheme(value);

  return (
    <div>
      <ThemeMode liftThemeMode={getTheme} />
      <Statistics list={list} />
      <List list={list} setList={setList} todoTheme={todoTheme} />
    </div>
  );
}
