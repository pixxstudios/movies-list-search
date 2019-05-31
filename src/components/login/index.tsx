import * as React from 'react'
import { useEffect } from 'react';
import { LoginWrapper, LoginForm, Heading } from './styled';

export default () => {

    useEffect(() => {

    }, []);

    const handleFormSubmission = () => {
        console.log('clicked !!');
    };

    return (
        <LoginWrapper>
            <Heading>Books Information System</Heading>
            <LoginForm>
                <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="username">Username</label> 
                            <input type="text" className="form-control" id="username" placeholder="Username" required />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="password">Password</label> 
                            <input type="password" className="form-control" id="password" placeholder="Password" required />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <button onClick={handleFormSubmission} type="button" className="btn btn-warning">Login</button>
                    </div>
                </form>
            </LoginForm>
        </LoginWrapper>
    )
}