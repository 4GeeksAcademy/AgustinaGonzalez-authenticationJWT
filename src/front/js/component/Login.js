import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-md-6 col-lg-4 login'>
          <form>
            <h2 className='text-center'>Login</h2>
            <hr />
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='d-flex justify-content-center'>
                <Link to={'/private'}>
            <button type='submit' className='btn btn-primary btn-block'>
              Login
            </button>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
