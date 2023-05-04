import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

//-- Import authorization class --//
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({email: '', password: ''});
    const [login, { error , data}] = useMutation(LOGIN_USER);

    //-- update state based on form input changes --//
    const handleChange = (event) => {
        const { name , value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //-- submit form --//
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: {...formState},
            });

            Auth.login(data.login.token);
        } catch(e) {
            console.error(e);
        }

        //-- If successful, clear form values --//
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main className='container min-vh-100 d-flex justify-content-center align-items-center'>
          
            <section className='col-6'>
              <div className='text-center'>
                <h1>Game App!</h1>
                <h6>Share Games, AnyTime, Anywhere</h6>
              </div>
              <div className="card text-center">
                <h4 className="card-header bg-dark text-light p-2">Login</h4>
                <div className="card-body">
                  {data ? (
                    <p>
                      Success! You may now head{' '}
                      <Link to="/">back to the homepage.</Link>
                    </p>
                  ) : (
                    <form onSubmit={handleFormSubmit} className='container text-center'>
                      <div className='row justify-content-center m-2'>
                        <input
                          className="form-input text-center"
                          placeholder="Your email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className='row justify-content-center m-2'>
                        <input
                          className="form-input text-center"
                          placeholder="******"
                          name="password"
                          type="password"
                          value={formState.password}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        className="row btn btn-block btn-primary"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                      >
                        Login
                      </button>
                      <div className='row justify-content-center m-2'>
                        <Link to="/signup">Don't Have an Account?</Link>
                      </div>
                      
                    </form>
                  )}
      
                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>
            </section>

        </main>
      );


};

export default Login;