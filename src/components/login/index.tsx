import * as React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginForm, Heading } from './styled';
import { checkUserCredentialsRequest } from '../../actions';

const Login = props => {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    useEffect(() => {
        console.log('use effect');
    }, []);

    const handleFormSubmission = () => {
        props.checkUserCredentials(username, password);
        // dispatch(checkUserCredentials(username, password));
    };

    return (
        <LoginWrapper>
            <Heading>Books Information System</Heading>
            <LoginForm>
                <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="username">Username</label> 
                            <input onChange={e => updateUsername(e.target.value)} type="text" className="form-control" id="username" placeholder="Username" required />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="password">Password</label> 
                            <input onChange={e => updatePassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" required />
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

const mapStateToProps = state => {
    return {
        booksList: state.books.booksList,
        isLoading: state.books.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkUserCredentials: (username, password) => { dispatch(checkUserCredentialsRequest(username, password)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
