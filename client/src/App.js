import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';

import Home from './pages/Home';

const App = () => {
    return(
        <div className='container'>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App;