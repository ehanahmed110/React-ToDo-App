// import React, { useState,useContext, } from 'react';
// import { TodoContext } from './todoContext';

// export function TodoForm() {
//     const [text,setText] = useState('');
//     const {
//         addTodo,
//         updateTodo,
//         editId,
//         todos,
//         setEditId
//     } = useContext(TodoContext);
//     useEffect(() => {
//         if (editId !== null) {
//             const todo = todos.find(t => t.id === editId);
//             if (todo) setText(todo.text);
//         }
//     }, [editId]);
//     const HandleSubmit = (event) =>{
//      event.preventDefault();
//      if (text.trim() === '') {
//         alert("Please enter some value");
//         return;
//      }
//     }
//     if (editId !== null) {
//         updateTodo(editId, text);
//     } else {
//         addTodo(text);
//     }
//     setText('');

//     return (
//         <>
//             <div className='p-8 flex justify-center'>
//                 <form action="#" className='space-x-6' onSubmit={HandleSubmit}>
//                     <input type="text" name='task'
//                      className='px-2 py-2 rounded-lg bg-white w-[600px]'
//                      placeholder='Write your task here'
//                      value={text}
//                      onChange={(e) => setText(e.target.value)}/>
//                     <button className='bg-green-500 text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-green-600'>
//                     {editId !== null ? "Update" : "Add"}
//                         </button>
//                 </form>
//             </div>
//         </>
//     )
// }




import React, { useState, useContext, useEffect } from 'react';
import { TodoContext } from './TodoContext'; // ✅ fix 'components'

export function TodoForm() {
    const [text, setText] = useState('');
    const {
        addTodo,
        updateTodo,
        editId,
        todos,
        setEditId
    } = useContext(TodoContext);

    useEffect(() => {
        if (editId !== null) {
            const todo = todos.find(t => t.id === editId);
            if (todo) setText(todo.text);
        }
    }, [editId]);

    const HandleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() === '') {
            alert("Please enter some value");
            return;
        }

        if (editId !== null) {
            updateTodo(editId, text);
        } else {
            addTodo(text);
        }

        setText('');
    };

    return (
        <div className='p-8 flex justify-center'>
            <form className='space-x-6' onSubmit={HandleSubmit}>
                <input
                    type="text"
                    name='task'
                    className='px-2 py-2 rounded-lg bg-white w-[600px]'
                    placeholder='Write your task here'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className='bg-green-500 text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-green-600'>
                    {editId !== null ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
}
