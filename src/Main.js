import React from 'react';
import Index from './Auth';
import './media/styles/header.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element= {<Index/>}
                />
            </Routes>
        </BrowserRouter>
    )
};

export default Main