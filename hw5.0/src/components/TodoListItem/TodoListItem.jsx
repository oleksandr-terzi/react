import React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
import "./style.sass";

import { ITEM_COMPLETED, ITEM_PROGRESS } from "../../constants/todoConstants";

export default function TodoListItem({
  item,
  handleItemCompleted,
  handleItemDelete,
  handleItemEdit,
}) {
  const itemClass = (item) => {
    const classes = [`list__item`];

    classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);

    return classes.join(` `);
  };

  return (
    <ListItemButton
      onClick={() => handleItemCompleted(item)}
      sx={{ mb: 1 }}
      className={itemClass(item)}
    >
      <Grid
        style={{ flexWrap: "nowrap" }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <strong>{item.rating}</strong> <span>{item.title}</span>
        </div>
        <div style={{ display: "flex" }}>
          <IconButton
            edge="start"
            aria-label="edit"
            onClick={(e) => handleItemEdit(e, item.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(e) => handleItemDelete(e, item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Grid>
    </ListItemButton>
  );
}
