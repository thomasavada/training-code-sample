import React, {useEffect} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const Todoes = props => {
    const [todos, setTodos] = React.useState([]);

    async function loadTodoes() {
        const response = await fetch('http://localhost:5001/api/todo');
        const todoesList = await response.json();
        setTodos(todoesList['data']);
        return todoesList
    }

    useEffect(() => {
        console.log('Component mounted')
        loadTodoes()
    }, [])

    const addTodo = async text => {
        try {
            const resp = await fetch("http://localhost:5001/api/todo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": 1, //find()
                    "title": text,
                    "completed": true
                }),
            });

            const data = await resp.json();
            if (data.success) {
                setTodos(prev => {
                    return [...prev, {
                        "id": 1,
                        "title": text,
                        "completed": false
                    }]
                })
            }
        } catch (e) {
            console.error(e)
        }
    };

    const completeTodo = async (todo, index, idTodo) => {
        try {
            const resp = await fetch("http://localhost:5001/api/todo" + "/" + idTodo, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...todo,
                    completed: true
                }),
            })

            const data = await resp.json();
            if (data.success) {
                setTodos(currentTodoList => {
                    return currentTodoList.map(todo => {
                        if (todo.id === parseInt(idTodo)) {
                            return {
                                ...todo,
                                completed: true
                            }
                        }
                        return todo;
                    })
                });
            }
        } catch
            (e) {
            console.error(e)
        }
    }

    const removeTodo = async (index, idTodo) => {
        try {
            const resp = await fetch(`http://localhost:5001/api/todo/${idTodo}`, {
                method: 'DELETE'
            });
            const data = await resp.json();
            if (data.success) {
                const newTodo = todos.filter(todo => todo.id !== parseInt(idTodo));
                setTodos(newTodo);
            }
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        idTodo={todo.id}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
};

Todoes.propTypes = {};

export default Todoes;