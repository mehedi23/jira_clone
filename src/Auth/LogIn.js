import React from 'react'
import AuthPage from './components/AuthPage';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Logo from '../media/images/jira-logo.png';

const LogIn = () => {
    return (
        <AuthPage>
            <div className='logo'>
                <img src={Logo} alt='img' width='86'/>
            </div>
            <div className='my-4'>
                <h1 className='text-center'> Log in to continue </h1>
            </div>

            <input placeholder='Enter your email' type="email"/>
            <Button className='w-100 mt-2' variant="contained"> Continue </Button>

            <div className='d-flex justify-content-center mt-4'>
                <Link to="/recover-account" className='link-to'> Can't log in? </Link>
                <i class="bi bi-dot px-1"></i>
                <Link to="/sign-up" className='link-to'>Create an account</Link>
            </div>
        </AuthPage>
    )
}

export default LogIn