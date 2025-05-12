// 




import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export function TodoList() {
    const { todos, deleteTodo, setEditId } = useContext(TodoContext);

    return (
        <div>
            <ul className='w-[60%] px-4 mx-auto py-4'>
                {todos.length === 0 ? (
                    <p className='text-center text-gray-500'>No tasks added</p>
                ) : (
                    todos.map((todo) => (
                        <li className='flex justify-between mt-2' key={todo.id}>
                            <div>
                                <p>{todo.text}</p>
                            </div>
                            <div className='flex gap-x-3'>
                                <button
                                    onClick={() => setEditId(todo.id)}
                                    className='bg-amber-400 px-4 py-1 rounded-lg font-bold text-white cursor-pointer hover:bg-amber-500'
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className='bg-red-500 px-2 py-1 rounded-lg font-bold text-white cursor-pointer hover:bg-red-700'
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
