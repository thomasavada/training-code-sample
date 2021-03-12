import React from "react";

function TodoForm({addTodo}) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={handleChange}
            />
        </form>
    );
}

export  default TodoForm;