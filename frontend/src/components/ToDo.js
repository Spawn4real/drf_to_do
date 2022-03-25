import React from 'react'


const ToDotItem = ({item}) => {
   return (
            <tr>
                <td>
                    {item.text}
                </td>
                <td>
                    {item.create}
                </td>
                <td>
                    {item.project}
                </td>
            </tr>
   )
}

const ToDoList = ({todos}) => {
    console.log({todos})
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Задача</th>
                    <th scope="col">Дата создания</th>
                    <th scope="col">Проект</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((item) => <ToDotItem item={item} />)}
            </tbody>
        </table>
    )
 }


 export default ToDoList