import React from "react";

import TodoItem from "./TodoItem";
import {Todo} from "../types";

interface TodoListProps{
    list: Todo[]
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void,
}

const TodoList = ({list, toggleTodo, removeTodo}: TodoListProps) => {
  return (
      <ul>
          {list.map((todo) => (
              <TodoItem key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo}/>
          ))}
      </ul>
  )

}

export default TodoList;