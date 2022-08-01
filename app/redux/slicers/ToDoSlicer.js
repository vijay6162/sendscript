import { createSlice } from "@reduxjs/toolkit";

export const getInitialTodoState = () => {
  return {
    todoloading: false,
    todoresponse: null,
    todoerror: null,
  };
};

const toDoSlice = createSlice({
  name: "todo",
  initialState: getInitialTodoState(),
  reducers: {
    requestToDoList: (state, { payload }) => {
      state.todoloading = true;
    },
    responseToDoList: (state, { payload }) => {
      state.todoloading = false;
      state.todoresponse = payload;
    },
    errorToDoList: (state, { payload }) => {
      state.todoerror = payload;
    },
  },
});

export const { requestToDoList, responseToDoList, errorToDoList } =
  toDoSlice.actions;

export const toDoSelector = (state) => state.todo;

export default toDoSlice.reducer;
