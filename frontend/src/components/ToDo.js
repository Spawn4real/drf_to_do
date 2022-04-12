import React from 'react'
import { Link } from 'react-router-dom'



const ToDoItem = ({ todo, deleteToDo }) => {
   return (
            <tr>
                {/*<td>*/}
                {/*    {item.text}*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    {item.create}*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    {item.project}*/}
                {/*</td>*/}
                <td>
                    <button className="col-sm btn btn-danger" onClick={() => deleteToDo(todo.id)} type="button">Delete
                    </button>
                </td>
            </tr>
   )
}

export const ToDoList = ({ todos, deleteTodo }) => {
    console.log({todos})

    return (
        <div className="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Задача</th>
                    <th scope="col">Дата создания</th>
                    <th scope="col">Проект</th>
                </tr>
            </thead>
            <tbody>
               {todos.filter((todo) => todo.isActive).map((todo) => <ToDoItem todo={todo} deleteTodo={deleteTodo} />)}
            </tbody>
        </table>
            <Link class="col-sm btn btn-success" to='/todos/create'>Create</Link>
        </div>
    )
 }


 export default ToDoList