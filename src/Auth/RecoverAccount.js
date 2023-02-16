import React from 'react'
import AuthPage from './components/AuthPage';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const LogIn = () => {
    return (
        <AuthPage>
            <div className='mb-4'>
                <h1 className='text-center canot-log-in-tittle'> Can't log in? </h1>
            </div>

            <label className='pb-1'> We'll send a recovery link to </label>
            <input placeholder='Enter your email' type="email"/>
            <Button className='w-100 mt-4' variant="contained"> Send recovery link </Button>

            <div className='pt-2 opacity-50'>
                <hr/>
            </div>

            <div className='d-flex justify-content-center mt-3'>
                <Link to="/log-in" className='link-to'> Return to log in </Link>
            </div>
        </AuthPage>
    )
}

export default LogIn