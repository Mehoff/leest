import * as React from "react";
import TodoItemProps from "./todo-item-props.interface";

import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

import CoffeeIcon from "@mui/icons-material/Coffee";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          {props.isFinised ? <CancelIcon /> : <DoneIcon />}
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <CoffeeIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.header} secondary={props.description} />
    </ListItem>
  );
};

export default TodoItem;
