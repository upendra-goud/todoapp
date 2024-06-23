import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ id: uuidv4(), text: todo, completed: false });
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
