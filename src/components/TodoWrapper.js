import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'
// now call uuid
uuidv4()

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([
        {id: 1, task: "Go buy stuff to make tacos", completed: true, isEditing: false},
        {id: 2, task: "Prepare the taco fiesta", completed: false, isEditing: false},
        {id: 3, task: "Invite my people over for tacos", completed: true, isEditing: false},
        {id: 4, task: "Eat those tacos", completed: false, isEditing: false},
        {id: 5, task: "Take a nap", completed: false, isEditing: false}
    ])

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, 
            completed: false, isEditing: false}])
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,
        completed: !todo.completed}: todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
        <h1>Yes, Another Todo App</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo}/>) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} editTodo={editTodo} />
            )
        ))}
    </div>
  )
}