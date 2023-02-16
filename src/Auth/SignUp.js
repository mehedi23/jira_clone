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
            <p className="auth-note mt-2">
                By signing up, I accept the Atlassian 
                <Link to="/"> Cloud Terms of Service </Link>
                 and acknowledge the <Link to="/">Privacy Policy</Link>.
            </p>
            <Button className='w-100 mt-2' variant="contained"> Sign Up </Button>

            <div className='d-flex justify-content-center mt-4'>
                <Link to="/log-in" className='link-to'>
                    Already have an Atlassian account? Log in
                </Link>
            </div>
        </AuthPage>
    )
}

export default LogIn