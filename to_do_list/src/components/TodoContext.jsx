import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id, newText) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
        setEditId(null);
    };

    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo,
            updateTodo,
            editId,
            setEditId
        }}>
            {children}
        </TodoContext.Provider>
    );
}
