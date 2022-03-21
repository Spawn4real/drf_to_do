import React from 'react';
import {HashRouter, Route, Link, BrowserRouter} from 'react-router-dom'


        const Er404 = () => {
            return (
                <section id="wrapper" class="container-fluid">
                    <div class="error-box">
                        <div class="error-body text-center">
                            <h1 class="text-danger">404</h1>
                            <h3>Page Not Found !</h3>

                        </div>
                        <footer class="footer text-center">{new Date().getFullYear()} <a href="#" target="_blank"></a></footer>
                    </div>
                </section>
            )
        }



 export default Er404