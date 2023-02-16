import React from 'react';
import '../media/styles/authPage.css';
import { Route, Routes } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import RecoverAccount from './RecoverAccount';
import NotifyLinkSent from './NotifyLinkSent';

const Auth = () => {
    return (
        <Routes>
            <Route
                path="/log-in"
                element= {<LogIn/>}
            />
            <Route
                path="/sign-up"
                element= {<SignUp/>}
            />
            <Route
                path="/recover-account"
                element= {<RecoverAccount/>}
            />
            <Route
                path="/verify-link"
                element= {<NotifyLinkSent/>}
            />
        </Routes>
    )
}

export default Auth