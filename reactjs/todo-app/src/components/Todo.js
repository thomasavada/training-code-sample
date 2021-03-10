import React from "react";

function Todo({todo, index, idTodo, completeTodo, removeTodo}) {
    return (
        <div
            className="todo"
            style={{textDecoration: todo.completed ? "line-through" : ""}}
        >
            {todo.title}
            <div>
                <button onClick={() => completeTodo(todo, index, idTodo)}>Complete</button>
                <button onClick={() => removeTodo(index, idTodo)}>x</button>
            </div>
        </div>
    );
}

export default Todo;