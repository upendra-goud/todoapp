import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
    return (
        <div>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : ''
                }}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>x</button>
        </div>
    );
}

export default Todo;
