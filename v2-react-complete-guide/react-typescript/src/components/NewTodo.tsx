import React, { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (todoText: string) => void}> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (!enteredText || !enteredText.trim().length) {
            return;
        }
        
        props.onAddTodo(enteredText);
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
