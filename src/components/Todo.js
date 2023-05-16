import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className={`${task.completed ? "Todo completed" : "Todo"}`}>
        <p>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faSquareCheck} onClick={() => toggleComplete(task.id)}/>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}