import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DoneIcon from "@mui/icons-material/Done";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <List>
      {
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DoneIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Primary text" secondary="Secondary text" />
        </ListItem>
      }
    </List>
  );
};

export default TodoList;
