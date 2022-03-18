import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as TodoActionCreators from "../store/action-creators/todo";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TodoActionCreators, dispatch);
};
