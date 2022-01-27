import {BrowserRouter as ReactRouter, Routes, Route,} from 'react-router-dom'
import React from "react";
import Home from "../components/home";
import AllTasks from "../components/allTasks";

export default function Router() {
    return (
        <ReactRouter>
            <Routes>
                <Route path='/home' element={<Home/>}/>>
                <Route path='/list' element={<AllTasks/>}/>
            </Routes>
        </ReactRouter>
    )
}