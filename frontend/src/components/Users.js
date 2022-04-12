import React from 'react'
import {Link} from 'react-router-dom'


const UserItem = ({users}) => {
   return (
            <tr>
                <td>
                    <Link to={`user/${users.username}`}>{users.username}</Link>
                </td>
                <td>
                    {users.first_name}
                </td>
                <td>
                    {users.last_name}
                </td>
                <td>
                    {users.email}
                </td>
            </tr>
   )
}

const UserList = ({users}) => {
    console.log({users})
    return (

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <UserItem users={user} />)}
            </tbody>
        </table>
    )
 }


 export default UserList