import React from 'react'
import AuthPage from './components/AuthPage';
import {Link} from 'react-router-dom';
import CheckYourEmail from '../media/images/check-your-email.svg';

const LogIn = () => {
    return (
        <AuthPage>
            <div className='mb-4'>
                <h1 className='text-center canot-log-in-tittle'> Can't log in? </h1>
            </div>

            <div className='d-flex justify-content-center mb-4'>
                <img src={CheckYourEmail} width="90" alt="img"/>
            </div>

            <label>We sent a recovery link to you at</label>

            <b>sdfsaf@gmail.com</b>

            <div className='pt-2 opacity-50'>
                <hr/>
            </div>

            <div className='d-flex justify-content-center mt-4'>
                <Link to="/log-in" className='link-to'> Return to log in </Link>
                <i class="bi bi-dot px-1"></i>
                <button className='link-to'>Resend recovery link</button>
            </div>
        </AuthPage>
    )
}

export default LogIn