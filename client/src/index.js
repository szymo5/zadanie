import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';
import App from './App';
import './App.css'

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);