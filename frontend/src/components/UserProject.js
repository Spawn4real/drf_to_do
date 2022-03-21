import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'


const ProjectItem = ({item}) => {
    return (
             <tr>
                 <td>
                     {item.name}
                 </td>
                 <td>
                     {item.repository}
                 </td>
                 <td>
                     {item.user.username}
                 </td>
             </tr>
    )
 }

 const UserProjects = ({items}) => {
     // console.log({projects})
    let { user_name } = useParams();
    let filtered_items = items.filter((item) => item.users.username === user_name)

     return (
         <table class="table">
             <thead>
                 <tr>
                     <th scope="col">Project</th>
                     <th scope="col">Repository</th>
                     <th scope="col">Name</th>
                 </tr>
             </thead>
             <tbody>
                 {/* {projects.map((project) => <ProjectItem item={project} />)} */}
                 {filtered_items.map((item) => <ProjectItem item={item} />)}
             </tbody>
         </table>
     )
  }



 export default UserProjects