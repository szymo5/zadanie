import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return(
        <div className='container'>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/auth' exact element={!user ? <Login/> : <Navigate redirect to="/"/>}/>
            </Routes>
        </div>
    )
}

export default App;