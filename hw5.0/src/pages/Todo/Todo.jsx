import React, { useState } from "react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

import TodoForm from "./TodoForm/TodoForm";
import TodoFilter from "./TodoFilter/TodoFilter";
import TodoColorPicker from "./TodoColorPicker/TodoColorPicker";
import TodoStatistics from "./TodoStatistics/TodoStatistics";
import TodoList from "./TodoList/TodoList";

export default function Todo() {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState();
  const [color, setColor] = useState();
  const [list, setList] = useState();

  return (
    <Container maxWidth="sm" sx={{ my: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Grid
          style={{ gap: "40px" }}
          sx={{ mb: "40px" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <TodoForm liftingNewTodo={setNewTodo} />
            <TodoStatistics list={list} />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <TodoFilter liftingFilter={setFilter} />
            <TodoColorPicker liftingColor={setColor} />
          </Grid>
        </Grid>

        <TodoList
          newTodo={newTodo}
          filter={filter}
          color={color}
          liftingList={setList}
        />
      </Paper>
    </Container>
  );
}
