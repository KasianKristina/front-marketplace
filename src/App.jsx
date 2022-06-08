import React from "react"
import {Header} from "./comp_js/routes/Header";
import {Footer} from "./comp_js/routes/Footer";
import {Main} from "./comp_js/routes/Main"
import { Basket } from "./comp_js/routes/Basket";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


export default function App() {  
    return (
        <Router >
            <Header />
            <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/basket" element={<Basket />} />   
            </Routes>
            <Footer/>
        </Router>
    );
}

