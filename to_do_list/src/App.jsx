// import React from 'react'

// import { TodoProvider } from './todoContext';
// import { TodoForm } from './component/todoForm'
// import { TodoList } from './component/todoList'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// function App() {


//   return (
//     <>
//     <TodoProvider>
//     <div className='container mx-auto bg-gray-50 pt-6'>
//       <h1 className='text-center font-bold mb-4 text-4xl uppercase'>Simple TO DO App</h1>
//       <TodoForm/>
//       <TodoList/>
//     </div>
//     </TodoProvider>
      
//     </>
//   )
// }

// export default App

import React from 'react';
import { TodoProvider } from './components/TodoContext';  // ⬅️ correct path
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
    return (
        <TodoProvider>
            <div className='min-h-screen bg-gray-100'>
                <h1 className='text-3xl text-center font-bold mt-6'>📝 My ToDo App</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;

