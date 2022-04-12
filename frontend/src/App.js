import React from 'react';
import './App.css';
import UserList from "./components/Users";
import ToDoList from './components/ToDo.js'
import ProjectList from './components/Project.js'
import UserProjects from './components/UserProject.js'
import Er404  from './components/Er404.js'
import axios from "axios";
//import Menu from "./components/Menu";
import Footer from "./components/Footer";
import LoginForm from './components/Auth.js';
import Cookies from 'universal-cookie';
import {Routes, Route, Navigate, BrowserRouter, Link, useLocation} from 'react-router-dom';
import ProjectForm from './components/ProjectForm';
import TodoForm from './components/ToDoForm';

const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


const NotFound = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects':[],
            'todos':[],
            'token': '',
        }
    }

    load_data() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState({
                    'users': users,
                })
            })
        .catch(error => {
            console.log(error)
            })
        axios.get('http://127.0.0.1:8000/api/todos')
            .then(response => {

            const todos = response.data.results
                this.setState(
                {
                    'todos': todos
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/param')
            .then(response => {

                const projects = response.data.results
                this.setState(
                    {
                    'projects': projects
                    }
                )
                }).catch(error => console.log(error))


  }



    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token})
    }

    is_authenticated() {
        return this.state.token !== ''
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token})
    }

    getHeader() {
        if (this.isAuth()) {
            return {
                'Authorization': 'Token ' + this.state.token
            }
        }
        return {
            'Accept': 'application/json; version=2.0'
        }
    }


    logout() {
        this.set_token('')
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username,
        password: password})
        .then(response => {
        this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
    }


    componentDidMount() {
        this.get_token_from_storage()
        this.load_data()
    }
    deleteProject(id) {
    const headers = this.get_headers()
    axios.delete(get_url(`project/${id}`), { headers }).then(

      response => {
        this.load_data()

      }
    ).catch(error => {
      console.log(error)
      this.setState({ projects: [] })
    })
  }

  deleteTodo(id) {
    const headers = this.get_headers()
    axios.delete(get_url(`todo/${id}`), { headers }).then(

      response => {
        this.load_data()

      }
    ).catch(error => {
      console.log(error)
      this.setState({ todos: [] })
    })

  }

  createProject(name, url, users) {
    const headers = this.get_headers()
    const data = { name: name, url: url, users: users }
    console.log(data)

    axios.post(get_url('project/'), data, { headers }).then(
      response => {
        this.load_data()
      }
    ).catch(error => {
      console.log(error)
      this.setState({ projects: [] })
    })

  }

  createTodo(project, text, user) {
    const headers = this.get_headers()
    const data = { project: project, text: text, user: user }
    console.log(data)

    axios.post(get_url('todo/'), data, { headers }).then(
      response => {
        this.load_data()
      }
    ).catch(error => {
      console.log(error)
      this.setState({ todos: [] })
    })
  }



     render() {
        return (

             <div>
                <BrowserRouter>
                    <nav className='menu'>
                        <li><Link to='/'>Users</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/todo'>Notes</Link></li>
                        <li>{this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> :
                                <Link to='/login'>Login</Link>}
                        </li>


                        {/*<li>*/}
                        {/*    /!*{this.isAuth() ? <button onClick={() => this.logout()}>Logout</button> :*!/*/}
                        {/*    /!*    <Link to='/login'>Login</Link>}*!/*/}
                        {/*    {this.isAuth() ? <button onClick={() => this.logout()}>{this.state.login}/Logout</button> :<Link to='/login'>Login</Link>}*/}
                        {/*</li>*/}

                    </nav>
                    {/*<SiteMenu/>*/}
                    <Routes>
                        <Route exact path='/' element={<UserList users={this.state.users}/>}/>
                        <Route exact path='/projects' element={<ProjectList projects={this.state.projects} deleteProject=
                            {(id) => this.deleteProject(id)}/>}/>
                        <Route exact path='/todo' element={<ToDoList todos={this.state.todos}
                                                                     deleteTodo={(id) => this.deleteTodo(id)} />} />
                        <Route exact path='/login' element={() => <LoginForm get_token={(username, password) =>
                            this.get_token(username, password)} is_authenticated={() => this.is_authenticated()}/>}/>
                        <Route exact path='/projects/:id' element={<UserProjects projects={this.state.projects}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route exact path='/projects/create' component={() => <ProjectForm users={this.state.users}
                        createProject={(name, url, users) => this.createProject(name, url, users)} />} />

                        <Route exact path='/todos/create' component={() => <TodoForm projects={this.state.projects}
                        users={this.state.users} createTodo={(project, text, user) => this.createTodo(project, text, user)}
                        />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>

            </div>
    )

  }
}

export default App;