import React, {useEffect} from "react";

import TodoItem from "components/TodoItem";
import {Todo} from "types";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux-hook";
import {selectAsyncTodos} from "./asyncTodoSelectors";
import {fetchAllTodos} from "./todoAsyncActions";


const AsyncTodoList = () => {
    const {list} = useSelector(selectAsyncTodos);
    const dispatch = useAppDispatch();
    const handleRemoveTodo = (id: Todo['id'])=>{
        // dispatch(removeTodo(id));
    }

    const handleToggleTodo = (id: Todo['id'])=>{
        // dispatch(toggleTodo(id));
    }
    useEffect(()=>{
        dispatch(fetchAllTodos());
    }, []);
    return (
        <ul>
            {list.map((todo) => (
                <TodoItem key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo}/>
            ))}
        </ul>
    )

}

export default AsyncTodoList;