import React from 'react'
const UserItem = ({users}) => {
    return (
        <tr>
            <td>
                {users.username}
            </td>
            <td>
                {users.email}
            </td>
            <td>
                {users.first_name}
            </td>
            <td>
                {users.last_name}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <th>
                Username
            </th>
            <th>
                Электронная почта
            </th>
            <th>
                Имя
            </th>
            <th>
                Фамилия
            </th>
                {users.map((users) => <UserItem users={users} />)}
        </table>
    )
}
export default UserList