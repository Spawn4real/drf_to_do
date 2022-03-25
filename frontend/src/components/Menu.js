import React from 'react'

import {Link} from 'react-router-dom'


        const Menu = () => {
            return (
                <header>
                    {/* <!-- Navbar --> */}
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-25">
                        <div class="text-center container-fluid">

                            <div class="collapse navbar-collapse" id="navbarExample01">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active">
                                    {/* <a class="nav-link" aria-current="page" href="#">Home</a> */}
                                    <Link class="nav-link" to='/users'>Пользователи</Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="#">Login</a> */}
                                    <Link class="nav-link" to='/projects'>Проекты</Link>
                                </li>

                                <li class="nav-item">
                                    {/* <a class="nav-link" href="#">About</a> */}
                                    <Link class="nav-link" to='/todos'>Задачи</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Navbar --> */}
                </header>
            )
        }



 export default Menu