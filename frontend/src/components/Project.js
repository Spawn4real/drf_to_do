import React from 'react'



const ProjectItem = ({ project, deleteProject }) => {
   return (
            <tr>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.repository}
                </td>
                <td>
                    <button className="col-sm btn btn-danger" onClick={() => deleteProject(project.id)}
                            type="button">Delete
                    </button>
                </td>
            </tr>
   )
}

const ProjectList = ({ projects, deleteProject }) => {
    // console.log({projects})
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Repository</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
                </tbody>
            </table>
            <Link class="col-sm btn btn-success" to='/projects/create'>Create</Link>
        </div>
    )
 }


 export default ProjectList