import React from "react";

import TodoItem from "components/TodoItem";
import {Todo} from "types";
import {useAppSelector} from "../../redux-hook";
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodo} from "./todoSlice";


const TodoList = () => {
    const list = useAppSelector(state => state.todos);
    const dispatch = useDispatch();
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