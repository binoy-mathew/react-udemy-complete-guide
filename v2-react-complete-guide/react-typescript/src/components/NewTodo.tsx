import React, { useRef } from "react";

const NewTodo = () => {

    const todoTextInputRef = useRef<HTMLInputElement>();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add</button>
        </form>
    );
};

export default NewTodo;
