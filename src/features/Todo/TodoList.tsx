import React from "react";

import TodoItem from "components/TodoItem";
import {Todo} from "types";
import {useSelector} from "react-redux";
import {removeTodo, toggleTodo} from "./todoSlice";
import {selectAllTodos} from "./todoSelectors";
import {useAppDispatch} from "../../redux-hook";


const TodoList = () => {
    const list = useSelector(selectAllTodos);
    const dispatch = useAppDispatch();
    const handleRemoveTodo = (id: Todo['id'])=>{
        dispatch(removeTodo(id));
    }

    const handleToggleTodo = (id: Todo['id'])=>{
        dispatch(toggleTodo(id));
    }
  return (
      <ul>
          {list.map((todo) => (
              <TodoItem key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo}/>
          ))}
      </ul>
  )

}

export default TodoList;