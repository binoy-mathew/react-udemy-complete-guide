import React, { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodoContext } from '../store/todos-context';

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodoContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (!enteredText || !enteredText.trim().length) {
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add</button>
        </form>
    );
};

export default NewTodo;
