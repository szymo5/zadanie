import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    return(
        <div className='container'>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/auth' exact element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App;