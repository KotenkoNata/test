import NewItem from 'components/NewItem';

import {useAppDispatch} from "redux-hook";
import {createTodo} from "./todoAsyncActions";



const NewTodo = () => {
    const dispatch = useAppDispatch();

    const handleNewTodo = (title:string) =>{
        dispatch(createTodo(title));
    };

    return (
        <NewItem handleClick={handleNewTodo} placeholder="add new todo" />
    )
};

export default NewTodo;