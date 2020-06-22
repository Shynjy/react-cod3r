import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import React from "react"
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom' --> Funciona como o HasRouter porém o servidor tem que ser arrumado.

import Logo from "../components/template/Logo"
import Nav from "../components/template/Nav"
import Routes from './Routes'
import Footer from "../components/template/Footer"

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
